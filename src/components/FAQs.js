import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container';

const faqs = [
    {
        question: "What is Ratio App?",
        answer:
            "Ratio App provides an easy and secure way to track the most important aspects of your finances and tools to unlock the most valuable insights, so that you can make healthy financial decisions.",
    },
    {
        question: "Who can use it?",
        answer: "Ratio App is available to anyone, anywhere in the world.",
    },
    {
        question: "Where can I get it?",
        answer:
            "Ratio App is currently only available on the App Store, you can drop your email in the form below to be notified when Andriod version is available.",
    },
    {
        question: "How safe is my data?",
        answer:
            "Your financial data is private to you, stored securely on your device and backed up with encryption in the cloud so that you can recover the data on any other device for whatever reason. Read more about privacy and security https://ratio.app/privacy.",
    },
];

export function FAQs() {
    return (
        <section
            id="faqs"
            aria-labelledby="faqs-title"
            className="border-t border-gray-200 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl">
                    <div className="text-center">
                    <h2
                        id="faqs-title"
                        className="text-3xl font-medium tracking-tight text-gray-900"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
                        <a href="mailto:hello@ratio.app" className="font-semibold text-green-600 hover:text-green-500">
                            sending us an email
                        </a>{' '}
                        and we’ll get back to you as soon as we can.
                    </p>
                    </div>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>

            </Container>
        </section>
    )
}
