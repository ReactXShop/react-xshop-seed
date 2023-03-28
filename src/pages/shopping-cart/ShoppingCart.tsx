import { CheckBadgeIcon, QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export default function ShoppingCart() {
  const { cart, total, addOrRemoveFromCart, clearCart } = useShoppingCart();
  const navigate = useNavigate();
  const [fakePaying, setFakePaying] = useState(false);

  return (
    <div className="h-full bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            {cart.length === 0 && (
              <div className="p-4 sm:flex sm:items-center sm:justify-between">
                <h2 className="min-w-0 flex-1 text-xl font-medium text-gray-900">Your cart is empty.</h2>

                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-4">
                  <Link to="/" className="text-lg font-medium text-gray-600 hover:text-gray-500">
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            )}
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {cart.map((product, productIdx) => {
                const tokenName = product.name || `#${product.id}`;
                return (
                  <li key={product.id} className="flex py-3 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src={product.cached_images.small_250_250}
                        alt={tokenName}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative grid grid-cols-2 pr-9 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-lg">{tokenName}</h3>
                          </div>

                          <p className="mt-1 text-lg font-medium text-gray-900">{`$${product.price}`}</p>
                        </div>

                        <div className="sm:pr-9">
                          <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                            Quantity, {product.name}
                          </label>
                          <select
                            disabled
                            id={`quantity-${productIdx}`}
                            name={`quantity-${productIdx}`}
                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>

                          <div className="absolute top-0 right-0">
                            <button
                              type="button"
                              className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => {
                                addOrRemoveFromCart(product);
                              }}
                            >
                              <span className="sr-only">Remove</span>
                              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* 
                      <p className="mt-4 flex items-center space-x-2 text-lg text-gray-700">
                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                        <span>{"In stock"}</span>
                      </p> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Order summary */}
          {cart.length > 0 && (
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$0.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Learn more about how shipping is calculated</span>
                      <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$0.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Learn more about how tax is calculated</span>
                      <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$0.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900">{`$${total}`}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    setFakePaying(true);
                    setTimeout(() => {
                      setFakePaying(false);
                      clearCart();
                      navigate("/order-complete");
                    }, 2000);

                    // TODO: payment is not implemented yet
                    // navigate("/checkout");
                  }}
                  className=" flex w-full items-center justify-center rounded-xl border-2 bg-gray-900 p-2 px-3 text-xl font-medium text-white hover:bg-gray-600"
                >
                  <CheckBadgeIcon className="mr-3 h-6 w-6" />
                  <p>Checkout</p>
                </button>
              </div>
              {fakePaying && <Spinner />}
            </section>
          )}
        </form>
      </div>
    </div>
  );
}
