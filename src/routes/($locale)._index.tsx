import { Icon } from "@iconify/react";
import { Button, Link, Spacer } from "@nextui-org/react";
import Container from "~/components/container";
import { FormattedMessage, useIntl } from 'react-intl';
import { getLocalizedPathname } from "~/utils";

export default function Landing() {
  const intl = useIntl();

  return (
    <Container className="text-center max-w-4xl">
      <Spacer y={36} />
      <h1 className="text-7xl font-bold">
        <FormattedMessage id="landing.header" />
      </h1>
      <Spacer y={4} />
      <p className="text-lg text-foreground/80">
        <FormattedMessage id="landing.subheader" />
      </p>
      <Spacer y={12} />
      <div className="flex gap-4 justify-center">
        <Button as={Link} className="btn" color="primary" size="lg" href={getLocalizedPathname('/auth', intl.locale)}>
          <FormattedMessage id="landing.cta.getStarted" />
        </Button>
      </div>
      <Spacer y={12} />
      <Spacer y={12} />
      <div className="flex gap-4 justify-center">
        <div className="flex items-center gap-2">
          <Icon icon="bi:check2-circle" className="text-success" />
          <span><FormattedMessage id="landing.features.fast" /></span>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="bi:check2-circle" className="text-success" />
          <span><FormattedMessage id="landing.features.accurate" /></span>
        </div>
      </div>
    </Container>
  );
}