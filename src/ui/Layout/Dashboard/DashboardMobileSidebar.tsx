import { Transition, Dialog } from "@headlessui/react";
import {
  XMarkIcon,
  MagnifyingGlassIcon,
  CogIcon,
  LifebuoyIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

import { SIDEBAR_LINKS } from "../../../utils/sidebar";
import { SidebarLink, renderSidebarLinks } from "./DashboardSidebar";

type DashboardMobileSideBarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

export const DashboardMobileSideBar = ({
  isOpen,
  closeSidebar,
}: DashboardMobileSideBarProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={true}
          onClose={closeSidebar}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={closeSidebar}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>

              <div className="flex-1 h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
                <nav className="px-2 space-y-1 text-white">nav</nav>
                <div className="flex items-center px-4 space-x-2">
                  <div className="p-4 bg-purple-600 rounded-md"></div>
                  <h2 className="text-xl font-semibold text-gray-700">
                    Untitled UI
                  </h2>
                </div>
                <div className="px-4 mt-5 mb-5">
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block p-2 pl-10 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-200 focus:ring-purple-600 focus:outline-none focus:ring-2"
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
                <nav className="px-2">
                  {renderSidebarLinks(SIDEBAR_LINKS)}
                  <div className="mt-4">
                    <SidebarLink link="/" name="Support" Icon={LifebuoyIcon} />
                    <SidebarLink link="/" name="Settings" Icon={CogIcon} active />
                  </div>
                </nav>
                <div className="bg-gray-50 mx-2 rounded-md px-3 py-3 mt-4 mb-7">
                  <h4 className="font-semibold text-gray-700">
                    New features available!
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Checkout the new dasgboard view. Pages now load faster
                  </p>
                  <img
                    src="https://img.freepik.com/free-photo/young-business-woman-working-her-desk-with-laptop_23-2149206572.jpg?w=2000"
                    className="h-32 w-full my-4 rounded-md"
                    alt="profile"
                  />
                  <div className="flex space-x-3 text-sm">
                    <span className="text-gray-600">Dismiss</span>
                    <span className="text-purple-600 text-semibold cursor-pointer">
                      What's new?
                    </span>
                  </div>
                </div>

                <div className="mx-2 px-3 border-t py-4 flex space-x-3 items-center">
                  <img
                    src="https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I="
                    className="h-9 w-9 rounded-full "
                    alt="profile"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 font-medium">
                      Olivia Rhye
                    </p>
                    <p className="text-sm text-gray-600">
                      olivia@untitledui.com
                    </p>
                  </div>
                  <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-700" />
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </Dialog>
      </Transition>
    </>
  );
};
