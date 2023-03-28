import { Menu, Transition } from "@headlessui/react";
import { ArrowRightCircleIcon, HeartIcon, UserIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { useAuth } from "../context/AuthContext";
import { Avatar } from "./Avatar";

export function ProfileMenu() {
  const { logout } = useAuth();

  return (
    <div className="relative text-left">
      <Menu as="div" className="flex">
        <Menu.Button
          title="login or signup"
          className="rounded text-gray-800 outline-none focus:ring-2 focus:ring-offset-2 dark:text-white dark:hover:text-gray-300"
          aria-label="login or signup"
        >
          <Avatar size="medium" nameInitial="XS" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-12 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                  >
                    <UserIcon className="mr-2 h-5 w-5" />
                    Profile
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                  >
                    <HeartIcon className="mr-2 h-5 w-5" />
                    Wish list
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={`${
                      active ? "bg-gray-100 " : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-base`}
                  >
                    <ArrowRightCircleIcon className="mr-2 h-5 w-5" />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>{" "}
    </div>
  );
}
