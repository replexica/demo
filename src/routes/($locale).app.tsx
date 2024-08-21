"use client";

import { useIntl } from 'react-intl';
import Heading from "~/components/heading";

export default function App() {
  const intl = useIntl();

  return (
    <div className="flex flex-col min-h-screen">
      <Heading
        title={intl.formatMessage({ id: 'dashboard.title' })}
        subtitle={intl.formatMessage({ id: 'dashboard.subtitle' })}
      />
    </div>
  );
}
