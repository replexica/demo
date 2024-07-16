import {
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useParams,
} from "@remix-run/react";
import "./../tailwind.css";
import RootLayout from "~/components/layout";
import { cn } from "~/utils";
import demoConfig from "~/demo-config";
import { LoaderFunctionArgs } from "@remix-run/node";
import { IntlProvider } from 'react-intl';

export const loader = async (args: LoaderFunctionArgs) => {
  const locale = args.params.locale;
  if (!locale) {
    return redirect('/en');
  }

  const localeData = await fetch(
    new URL(`/i18n/${locale}.json`, args.request.url),
  )
    .then((res) => res.json())
    .catch(() => ({}));

  return {
    locale,
    localeData,
  };
}

export default function Root() {
  const loaderData = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <IntlProvider
      locale={loaderData.locale}
      messages={loaderData.localeData}
    >
      <html lang={loaderData.locale} className={cn(`${demoConfig.theme} h-full text-foreground bg-background`)}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body className="h-full">
          <RootLayout
            locale={loaderData.locale}
            navigate={navigate}
            onLocaleChange={handleLocaleChange}
          >
            <Outlet />
            <ScrollRestoration />
            <Scripts />
          </RootLayout>
        </body>
      </html>
    </IntlProvider>
  );

  function handleLocaleChange(newLocale: string) {
    const currentPathname = window.location.pathname;
    const chunks = currentPathname.split('/');
    chunks[1] = newLocale;
    const newPathname = chunks.join('/');
    navigate(newPathname);
  }
}