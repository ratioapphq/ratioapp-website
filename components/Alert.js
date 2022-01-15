/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon, XIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";

export default function Alert(props) {
  const message = props.alert.message;
  const type = props.alert.type;

  return (
    <div
      className={`rounded-md ${
        type === "success" ? "bg-green-50" : "bg-red-50"
      } p-4 mt-3`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {type === "success" ? (
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          ) : (
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          )}
        </div>
        <div className="ml-3">
          <p
            className={`text-sm font-medium ${
              type === "success" ? "text-green-800" : "text-red-800"
            }`}
          >
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3" hidden>
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
