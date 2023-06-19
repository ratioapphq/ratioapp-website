import {
  SwitchVerticalIcon,
  SearchIcon,
  RefreshIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ViewGridIcon,
  ZoomInIcon,
} from "@heroicons/react/24/outline";
import { Container } from "./Container";

const features = [
  {
    name: "Track expenses & income",
    description:
      "Add rich information to your transactions with notes, transaction type and payment type.",
    icon: SwitchVerticalIcon,
  },
  {
    name: "Search your spendings",
    description:
      "Find past purchases and bill payments no matter how long it has been.",
    icon: SearchIcon,
  },
  {
    name: "Categorise everything",
    description:
      "Comprehensive list of categories to organise transactions so that you know exactly where your money is going.",
    icon: ViewGridIcon,
  },
  {
    name: "Detailed Insights",
    description:
      "View spending patterns over any period of time. Get detailed insights so that you can make better financial decisions.",
    icon: ChartBarIcon,
  },
  {
    name: "Syncing",
    description:
      "Sync data across multiple devices. Your data is securely backed up in the cloud.",
    icon: RefreshIcon,
  },
  {
    name: "Local currencies",
    description: "Save and view transactions in your local currency format.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Privacy & Security",
    description:
      "Secure your app with biometrics. Your data is protected with encryption on the remote server.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Accessibility",
    description: "Easy on the eyes with bold text and dark mode support.",
    icon: ZoomInIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white">
        <Container>
      <div className="max-w-4xl mx-auto py-16 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            <span>
                Designed to help you
                <br />
                become financially responsible
            </span>
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          Take full control of your money with easy and secure expense tracking
          and specific insights to help you build great financial habits that would improve your overall financial health.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-full bg-ratiogreen-100 bg-opacity-30">
                  {/* <feature.icon
                    className="h-6 w-6 text-ratiogreen-500"
                    aria-hidden="true"
                  /> */}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
  );
}