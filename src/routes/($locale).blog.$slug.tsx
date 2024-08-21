import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ReactMarkdown from "react-markdown";
import RemarkFrontmatter from "remark-frontmatter";

export const loader = async (args: LoaderFunctionArgs) => {
  try {
    const slug = args.params.slug as string;
    const locale = args.params.locale as string || "en";
    const contentRes = await fetch(
      new URL(`/content/${locale}/${slug}.md`, args.request.url)
    );

    const content = await contentRes.text();
    return {
      slug,
      content,
    };
  } catch (error: any) {
    throw new Response(error.message, { status: 404 });
  }
}

export default function BlogPost() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <ReactMarkdown
      remarkPlugins={[RemarkFrontmatter]}
      className="prose dark:prose-invert mx-auto"
      children={loaderData.content}
      // apply beautiful styles to the markdown content with Tailwind CSS
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold my-12">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold my-6">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-bold my-4">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-xl font-bold my-2">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-foreground/80 my-2">{children}</p>
        ),
        hr: () => (
          <hr className="border-t border-foreground/20 my-8" />
        ),
        a: ({ children, href }) => (
          <a
            href={href as string}
            className="text-primary underline my-2"
          >
            {children}
          </a>
        ),
        img: ({ src, alt }) => (
          <img
            src={src as string}
            alt={alt as string}
            className="w-full object-cover h-[140px] bg-foreground-100 rounded-lg my-4"
          />
        ),
      }}
    />
  );
}
