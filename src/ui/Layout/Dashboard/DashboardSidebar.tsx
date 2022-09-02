import {
  MagnifyingGlassIcon,
  CogIcon,
  LifebuoyIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Badge } from "../../Badge";
import { SIDEBAR_LINKS, SideBarLinkProps } from "../../../utils/sidebar";
import clsx from "clsx";

const SidebarWithBadge = ({ name, link, Icon }: SideBarLinkProps) => {
  return (
    <div>
      <a
        href={link}
        className="flex transition rounded-lg px-2.5 py-2 focus:white duration-200 hover:bg-purple-700 hover:text-white items-center group justify-between"
      >
        <div className="flex items-center space-x-3">
          <Icon className="h-5 w-5 text-gray-500 group-hover:text-white" />
          <span className="text-gray-700 group-hover:text-white">{name}</span>
        </div>
        <Badge size="xs" className="text-gray-700">
          10
        </Badge>
      </a>
    </div>
  );
};

const Sidebar = ({ link, name, Icon, active }: SideBarLinkProps) => {
  return (
    <div>
      <a
        href={link}
        className={clsx(
          "flex transition rounded-lg px-2.5 py-2 focus:white duration-200 hover:bg-purple-700 hover:text-white space-x-3 items-center group",
          active ? "bg-gray-100" : ""
        )}
      >
        <Icon className="h-5 w-5 text-gray-500 group-hover:text-white" />
        <span className="text-gray-700 group-hover:text-white">{name}</span>
      </a>
    </div>
  );
};

const renderSidebarLinks = (sidebarLinks: SideBarLinkProps[]) => {
  return sidebarLinks.map((sidebarlink) => {
    if (sidebarlink.badge) {
      return (
        <SidebarWithBadge
          link={sidebarlink.link}
          name={sidebarlink.name}
          Icon={sidebarlink.Icon}
          badge={sidebarlink.badge}
        />
      );
    }
    return (
      <Sidebar
        link={sidebarlink.link}
        name={sidebarlink.name}
        Icon={sidebarlink.Icon}
      />
    );
  });
};

export const DashboardSidebar = () => {
  return (
    <Fragment>
      <div className="bg-white min-h-screen shadow absolute md:relative md:translate-x-0 transform -translate-x-full transition duration-200 ease-in-out w-64 flex-shrink-0 inset-y-0 left-0 pt-7 px-2">
        <div className="flex items-center px-4 space-x-2">
          <div className="p-4 bg-purple-600 rounded-md"></div>
          <h2 className="text-xl font-semibold text-gray-700">Untitled UI</h2>
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
            <Sidebar link="/" name="Support" Icon={LifebuoyIcon} />
            <Sidebar link="/" name="Settings" Icon={CogIcon} active />
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

        <div className="mx-2 border-t py-4 flex space-x-3 items-center">
          <img
            src="https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I="
            className="h-9 w-9 rounded-full "
            alt="profile"
          />
          <div>
            <p className="text-sm text-gray-800 font-medium">Olivia Rhye</p>
            <p className="text-sm text-gray-600">olivia@untitledui.com</p>
          </div>
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-700" />
        </div>
      </div>
    </Fragment>
  );
};
