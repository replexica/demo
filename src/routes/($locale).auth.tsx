"use client";

import React from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { FormattedMessage, useIntl } from 'react-intl';
import { getLocalizedPathname } from "~/utils";

export default function App() {
  const intl = useIntl();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-4 rounded-large px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-xl font-medium">
          <FormattedMessage id="auth.signUp" />
        </p>
        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          <Input
            isRequired
            label={intl.formatMessage({ id: 'auth.username' })}
            name="username"
            placeholder={intl.formatMessage({ id: 'auth.enterUsername' })}
            type="text"
            variant="bordered"
          />
          <Input
            isRequired
            label={intl.formatMessage({ id: 'auth.emailAddress' })}
            name="email"
            placeholder={intl.formatMessage({ id: 'auth.enterEmail' })}
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label={intl.formatMessage({ id: 'auth.password' })}
            name="password"
            placeholder={intl.formatMessage({ id: 'auth.enterPassword' })}
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleConfirmVisibility}>
                {isConfirmVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label={intl.formatMessage({ id: 'auth.confirmPassword' })}
            name="confirmPassword"
            placeholder={intl.formatMessage({ id: 'auth.confirmYourPassword' })}
            type={isConfirmVisible ? "text" : "password"}
            variant="bordered"
          />
          <Checkbox isRequired className="py-4" size="sm">
            <FormattedMessage id="auth.agreeTerms" />
            &nbsp;
            <Link href="#" size="sm">
              <FormattedMessage id="auth.terms" />
            </Link>
            &nbsp; <FormattedMessage id="auth.and" /> &nbsp;
            <Link href="#" size="sm">
              <FormattedMessage id="auth.privacyPolicy" />
            </Link>
          </Checkbox>
          <Button color="primary" type="submit" as={Link} href={getLocalizedPathname('/app', intl.locale)}>
            <FormattedMessage id="auth.signUp" />
          </Button>
        </form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">
            <FormattedMessage id="auth.or" />
          </p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
            as={Link} href={getLocalizedPathname('/app', intl.locale)}
          >
            <FormattedMessage id="auth.signUpWithGoogle" />
          </Button>
          <Button
            startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
            variant="bordered"
            as={Link} href={getLocalizedPathname('/app', intl.locale)}
          >
            <FormattedMessage id="auth.signUpWithGithub" />
          </Button>
        </div>
        <p className="text-center text-small">
          <FormattedMessage id="auth.alreadyHaveAccount" />
          &nbsp;
          <Link size="sm" href={getLocalizedPathname('/app', intl.locale)}>
            <FormattedMessage id="auth.logIn" />
          </Link>
        </p>
      </div>
    </div>
  );
}