import Head from 'next/head'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import {
  ArrowTopRightOnSquareIcon,
  BugAntIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'

const supportEmail = 'ratioapphq@gmail.com'
const emailHref =
  'mailto:ratioapphq@gmail.com?subject=Ratio%20Money%20Support&body=App%20version%20and%20build%3A%0AiOS%20version%3A%0ADevice%20model%3A%0A%0AHow%20can%20we%20help%3F%0A'

const supportTopics = [
  {
    name: 'Report a problem',
    description:
      'Tell us what happened and what you expected. Screenshots and steps to reproduce it are helpful.',
    icon: BugAntIcon,
  },
  {
    name: 'Ask a question',
    description:
      'Get help using Ratio Money or understanding a feature in the app.',
    icon: EnvelopeIcon,
  },
  {
    name: 'Share an idea',
    description:
      'Suggest an improvement or tell us what would make Ratio Money more useful to you.',
    icon: LightBulbIcon,
  },
]

const questions = [
  {
    question: 'How do I contact Ratio Money support?',
    answer:
      'Email ratioapphq@gmail.com or use the Email support button on this page. Include your app version, iOS version, device model, and a description of the issue so we can help more quickly.',
  },
  {
    question: 'Can I use Ratio Money without an account?',
    answer:
      'Yes. You can use Ratio Money without signing in. If you have a question about your data or a previous account, contact support before deleting the app.',
  },
  {
    question: 'How do I report a bug?',
    answer:
      'Email us with the steps that led to the problem, what you expected to happen, and what happened instead. If possible, attach a screenshot that does not contain sensitive financial information.',
  },
  {
    question: 'How does Ratio Money handle my data?',
    answer:
      'Our Privacy Policy explains how Ratio Money handles information. For questions about your data or a privacy request, email our support team directly.',
  },
  {
    question: 'Where can I suggest a feature?',
    answer:
      'Send your suggestion to our support email. We read every request and use feedback to decide what to improve next.',
  },
]

export default function Support() {
  return (
    <>
      <Head>
        <title>Ratio Money Support</title>
        <meta
          name="description"
          content="Contact Ratio Money support, report a problem, or find answers to common questions."
        />
      </Head>

      <div className="relative isolate overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-gradient-to-b from-cyan-50 via-ratiogreen-100/25 to-white"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-ratiogreen-200/30 blur-3xl"
        />

        <Container className="pb-20 pt-14 sm:pb-28 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-lg shadow-gray-900/10">
              <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-ratiogreen-800">
              Help when you need it
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-6xl">
              Ratio Money Support
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Have a question, found a bug, or want to suggest an improvement?
              Contact us directly and we’ll get back to you as soon as possible.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={emailHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-ratiogreen-500 focus:ring-offset-2 sm:w-auto"
              >
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                Email support
              </a>
              <a
                href={`mailto:${supportEmail}`}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 underline decoration-gray-300 underline-offset-4 transition hover:text-gray-950 hover:decoration-ratiogreen-500 focus:outline-none focus:ring-2 focus:ring-ratiogreen-500 focus:ring-offset-2"
              >
                {supportEmail}
              </a>
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-5xl gap-5 md:grid-cols-3">
            {supportTopics.map((topic) => (
              <div
                key={topic.name}
                className="rounded-2xl border border-gray-200/80 bg-white/85 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ratiogreen-100 text-ratiogreen-800">
                  <topic.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-base font-semibold text-gray-950">
                  {topic.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <section className="border-y border-gray-200 bg-gray-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-ratiogreen-800">
                Before you email
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950">
                Help us understand what happened.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600">
                Including a few details helps us investigate your question without
                asking you to repeat yourself.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8">
              <ul className="grid gap-5 text-sm text-gray-700 sm:grid-cols-2">
                {[
                  'App version and build number',
                  'iOS version',
                  'iPhone or iPad model',
                  'What you were trying to do',
                  'What happened instead',
                  'A privacy-safe screenshot, if useful',
                ].map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ratiogreen-100 text-ratiogreen-800">
                      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden="true">
                        <path
                          d="m5.5 10 3 3 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-gray-100 pt-6 text-xs leading-5 text-gray-500">
                Please do not email passwords, verification codes, full account
                numbers, or other sensitive financial information.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold text-ratiogreen-800">
                Common questions
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                A few quick answers
              </h2>
            </div>
            <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
              {questions.map((item) => (
                <Disclosure key={item.question} as="div" className="py-1">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-ratiogreen-500 focus-visible:ring-offset-4">
                        {item.question}
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none text-gray-500 transition-transform ${
                            open ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-6 pr-10 text-sm leading-7 text-gray-600">
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gray-950 px-6 py-12 text-white shadow-xl shadow-gray-900/10 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-ratiogreen-300">
                <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                <span className="text-sm font-semibold">Official support</span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Still need a hand?
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                Email the Ratio Money team and tell us how we can help.
              </p>
            </div>
            <a
              href={emailHref}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-ratiogreen-100 focus:outline-none focus:ring-2 focus:ring-ratiogreen-400 focus:ring-offset-2 focus:ring-offset-gray-950 lg:mt-0"
            >
              Contact support
              <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <nav
            aria-label="Support resources"
            className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-600"
          >
            <Link className="hover:text-gray-950" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-gray-950" href="/terms">
              Terms of Service
            </Link>
            <a
              className="inline-flex items-center gap-1.5 hover:text-gray-950"
              href="https://apps.apple.com/app/ratio-app/id1632361347"
              rel="noopener noreferrer"
              target="_blank"
            >
              View on the App Store
              <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </Container>
      </section>
    </>
  )
}
