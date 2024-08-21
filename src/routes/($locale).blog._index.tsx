import { Card, CardBody, CardFooter, Divider, Link, Spacer } from "@nextui-org/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import Heading from "~/components/heading";
import frontmatter from 'front-matter';
import { useLoaderData, useParams } from "@remix-run/react";
import { getLocalizedPathname } from "~/utils";
import { useIntl, FormattedMessage } from "react-intl";

const blogPostKeys = [
  'one',
  'two',
  'three',
];

export const loader = async (args: LoaderFunctionArgs) => {
  const locale = args.params.locale as string || "en";
  const blogPostPromises = blogPostKeys.map((key) => fetch(
    new URL(`/content/${locale}/${key}.md`, args.request.url)
  ).then((res) => res.text()));
  const blogPosts = await Promise.all(blogPostPromises);

  const blogPostData = blogPosts.map((postContent, index) => ({
    key: blogPostKeys[index],
    ...frontmatter<{ title: string; subtitle: string; }>(postContent),
  }));

  return {
    blogPosts: blogPostData,
  };
};

export default function Blog() {
  const params = useParams<{ locale: string; }>();
  const loaderData = useLoaderData<typeof loader>();
  const intl = useIntl();

  return (
    <>
      <Heading
        title={intl.formatMessage({ id: "blog.title" })}
        subtitle={intl.formatMessage({ id: "blog.subtitle" })}
      />
      <div className="gap-8 grid grid-cols-3">
        {loaderData.blogPosts.map((post) => (
          <Link href={getLocalizedPathname(`/blog/${post.key}`, params.locale!)} key={post.key} className="w-full">
            <Card
              shadow="sm"
              className="w-full"
              isPressable
            >
              <CardBody className="overflow-visible p-0">
                <div
                  className="w-full object-cover h-[140px] bg-foreground-100 rounded-lg"
                />
              </CardBody>
              <CardFooter className="text-sm flex-col items-start h-32">
                <b>{post.attributes.title}</b>
                <br />
                <p className="text-foreground/80 text-left">{post.attributes.subtitle}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
