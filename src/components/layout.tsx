import { Button, Link, NextUIProvider, Select, SelectItem } from "@nextui-org/react";
import Container from "./container";
import demoConfig from "~/demo-config";
import { useNavigate } from "@remix-run/react";
import { getLocalizedPathname } from "~/utils";
import { FormattedMessage, useIntl } from "react-intl";

export type RootLayoutProps = {
  navigate: ReturnType<typeof useNavigate>;
  locale: string;
  onLocaleChange: (locale: string) => void;
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  const intl = useIntl();
  console.log(props.locale);

  return (
    <NextUIProvider
      navigate={props.navigate}
      className="flex flex-col h-full"
    >
      {renderHeader()}
      {renderMain()}
      {renderFooter()}
    </NextUIProvider>
  );

  function renderHeader() {
    return (
      <Container
        as="header"
        className="flex justify-between items-center p-4 border-b border-foreground-100"
      >
        <div>
          <Link href={getLocalizedPathname('/', props.locale)} className="w-32">
            <img
              src={demoConfig.logoSrc}
              className="h-6"
              alt={intl.formatMessage({ id: "rootlayout.logo.alt" })}
            />
          </Link>
        </div>
        <div className="flex gap-8">
          <Link color="foreground" href={getLocalizedPathname('/', props.locale)}>
            <FormattedMessage id="rootlayout.nav.home" />
          </Link>
          <Link color="foreground" href={getLocalizedPathname('/app', props.locale)}>
            <FormattedMessage id="rootlayout.nav.app" />
          </Link>
          <Link color="foreground" href={getLocalizedPathname('/blog', props.locale)}>
            <FormattedMessage id="rootlayout.nav.blog" />
          </Link>
        </div>
        <div className="flex gap-2">
          <Button as={Link} href={getLocalizedPathname('/app', props.locale)} color="default">
            <FormattedMessage id="rootlayout.button.signin" />
          </Button>
          <Button as={Link} href={getLocalizedPathname('/app', props.locale)} color="primary">
            <FormattedMessage id="rootlayout.button.signup" />
          </Button>
        </div>
      </Container>
    );
  }

  function renderMain() {
    return (
      <Container as="main" className="flex-grow p-4">
        {props.children}
      </Container>
    );
  }

  function renderFooter() {
    return (
      <Container as="footer" className="flex justify-between items-center border-t border-foreground-100 p-4 text-sm text-foreground/75">
        <div>
          <FormattedMessage 
            id="rootlayout.footer.copyright"
            values={{ 
              name: demoConfig.name, 
              year: new Date().getFullYear() 
            }}
          />
        </div>
        <Select
          selectedKeys={[props.locale]}
          onSelectionChange={(keys: any) => {
            props.onLocaleChange(Array.from(keys)[0] as any);
          }}
          className="max-w-52"
        >
          {demoConfig.locales.map((locale) => (
            <SelectItem key={locale} value={locale} children={locale} />
          ))}
        </Select>
      </Container>
    );
  }
}