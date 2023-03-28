import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export const PaymentSuccessful = () => {
  return (
    <div className="h-full bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Order completed</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="order-completed" className="lg:col-span-7">
            <div className="p-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="container flex min-w-0 flex-1  text-xl font-medium text-gray-900">
                <CheckBadgeIcon className="mr-3 h-6 min-h-[1.5em] w-6 min-w-[1.5em] text-green-800" />
                <p>Your order is successfully placed.</p>
              </h2>

              <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-4">
                <Link to="/" className="text-lg font-medium text-gray-600 hover:text-gray-500">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {/* todo order summary */}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
