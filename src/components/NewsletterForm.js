import Script from "next/script"

export function NewsletterForm() {
  return (
    <div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between py-16">
      <div>
        <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Product announcements, feature updates, user stories and personal finance tips.
        </p>
      </div>
      <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:w-56 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  )
}
