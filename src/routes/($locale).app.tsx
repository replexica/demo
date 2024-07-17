"use client";

import React from "react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { FormattedMessage, useIntl } from 'react-intl';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Heading from "~/components/heading";

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const keywordData = [
  { name: 'Keyword 1', value: 400 },
  { name: 'Keyword 2', value: 300 },
  { name: 'Keyword 3', value: 300 },
  { name: 'Keyword 4', value: 200 },
];

const campaignData = [
  { name: 'Campaign A', performance: 80 },
  { name: 'Campaign B', performance: 65 },
  { name: 'Campaign C', performance: 90 },
  { name: 'Campaign D', performance: 75 },
];

export default function App() {
  const intl = useIntl();

  return (
    <div className="flex flex-col min-h-screen">
      <Heading
        title={intl.formatMessage({ id: 'dashboard.title' })}
        subtitle={intl.formatMessage({ id: 'dashboard.subtitle' })}
      />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Total Sales */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:chart-line" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.totalSales" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-blue-600">$24,500</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={salesData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
                  </LineChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>

            {/* Card 2: Active Campaigns */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:bullhorn" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.activeCampaigns" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-green-600">12</p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={campaignData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="performance" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>

            {/* Card 3: Keyword Performance */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:key-variant" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.keywordPerformance" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={keywordData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8b5cf6" label />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>

            {/* Card 4: Conversion Rate */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:percent" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.conversionRate" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-yellow-600">3.2%</p>
              </CardBody>
            </Card>

            {/* Card 5: AI Bidding Performance */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:robot" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.aiBiddingPerformance" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-purple-600">+15%</p>
              </CardBody>
            </Card>

            {/* Card 6: SEO Content Score */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:file-document-edit" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.seoContentScore" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-indigo-600">85/100</p>
              </CardBody>
            </Card>

            {/* Card 7: Order Fulfillment Rate */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:package-variant" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.orderFulfillmentRate" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-green-600">98.5%</p>
              </CardBody>
            </Card>

            {/* Card 8: Customer Satisfaction */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:emoticon-happy" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.customerSatisfaction" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-yellow-600">4.7/5</p>
              </CardBody>
            </Card>

            {/* Card 9: Revenue Growth */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:trending-up" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.revenueGrowth" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-blue-600">+22%</p>
              </CardBody>
            </Card>

            {/* Card 10: Market Share */}
            <Card className="shadow-md">
              <CardHeader className="flex gap-3 p-5">
                <Icon icon="mdi:chart-pie" width={24} height={24} />
                <p className="text-md">
                  <FormattedMessage id="dashboard.marketShare" />
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-purple-600">8.3%</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}