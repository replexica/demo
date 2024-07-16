"use client";

import React from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { FormattedMessage, useIntl } from 'react-intl';

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
          <FormattedMessage id="app.signUp" />
        </p>
        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          <Input
            isRequired
            label={intl.formatMessage({ id: 'app.username' })}
            name="username"
            placeholder={intl.formatMessage({ id: 'app.enterUsername' })}
            type="text"
            variant="bordered"
          />
          <Input
            isRequired
            label={intl.formatMessage({ id: 'app.emailAddress' })}
            name="email"
            placeholder={intl.formatMessage({ id: 'app.enterEmail' })}
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
            label={intl.formatMessage({ id: 'app.password' })}
            name="password"
            placeholder={intl.formatMessage({ id: 'app.enterPassword' })}
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
            label={intl.formatMessage({ id: 'app.confirmPassword' })}
            name="confirmPassword"
            placeholder={intl.formatMessage({ id: 'app.confirmYourPassword' })}
            type={isConfirmVisible ? "text" : "password"}
            variant="bordered"
          />
          <Checkbox isRequired className="py-4" size="sm">
            <FormattedMessage id="app.agreeTerms" />
            &nbsp;
            <Link href="#" size="sm">
              <FormattedMessage id="app.terms" />
            </Link>
            &nbsp; <FormattedMessage id="app.and" /> &nbsp;
            <Link href="#" size="sm">
              <FormattedMessage id="app.privacyPolicy" />
            </Link>
          </Checkbox>
          <Button color="primary" type="submit">
            <FormattedMessage id="app.signUp" />
          </Button>
        </form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">
            <FormattedMessage id="app.or" />
          </p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            <FormattedMessage id="app.signUpWithGoogle" />
          </Button>
          <Button
            startContent={<Icon className="text-default-500" icon="fe:github" width={24} />}
            variant="bordered"
          >
            <FormattedMessage id="app.signUpWithGithub" />
          </Button>
        </div>
        <p className="text-center text-small">
          <FormattedMessage id="app.alreadyHaveAccount" />
          &nbsp;
          <Link href="#" size="sm">
            <FormattedMessage id="app.logIn" />
          </Link>
        </p>
      </div>
    </div>
  );
}