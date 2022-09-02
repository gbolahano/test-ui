import clsx from "clsx";

const Menu = () => {
  return (
    <div
      className="flex mt-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 py-4"
      role={"group"}
    >
      <button
        className={clsx(
          "flex flex-shrink-0 items-center space-x-1 rounded-l-lg font-medium bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 text-sm border border-gray-200 focus:outline-indigo-600 focus:ring-indigo-600 focus:ring-2 focus:z-10"
        )}
      >
        My Details
      </button>
      <button
        className={clsx(
          "flex flex-shrink-0 items-center space-x-1 font-medium bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 text-sm border-t border-b border-gray-200 focus:ring-indigo-600 focus:outline-indigo-600 focus:ring-2 focus:z-10 border-r"
        )}
      >
        Profile
      </button>
      <button
        className={clsx(
          "flex flex-shrink-0 items-center space-x-1 font-medium bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 text-sm border-t border-b border-gray-200 focus:ring-indigo-600 focus:outline-indigo-600 focus:ring-2 focus:z-10 border-r"
        )}
      >
        Password
      </button>
      <button
        className={clsx(
          "flex flex-shrink-0 items-center space-x-1 font-medium bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 text-sm border-t border-b border-gray-200 focus:ring-indigo-600 focus:outline-indigo-600 focus:ring-2 focus:z-10 border-r"
        )}
      >
        Team
      </button>
      <button
        className={clsx(
          "flex flex-shrink-0 items-center space-x-1 font-medium bg-gray-50 hover:bg-gray-100 text-gray-800 px-4 py-2 focus:outline-indigo-600 text-sm border-t border-b border-gray-200 focus:ring-indigo-600 focus:ring-2 focus:z-10"
        )}
      >
        billing
      </button>
      <button
        className={clsx(
          "flex flex-shrink-0 items-center space-x-1 font-medium bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 text-sm border-t border-b border-gray-200 focus:ring-indigo-600 focus:outline-indigo-600 focus:ring-2 focus:z-10 border-r border-l"
        )}
      >
        Notifications
      </button>
      <button
        className={clsx(
          "flex flex-shrink-0 items-center space-x-1 font-medium bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 text-sm border-t border-b border-gray-200 focus:ring-indigo-600 focus:outline-indigo-600 focus:ring-2 focus:z-10"
        )}
      >
        Integrations
      </button>
      <button
        className={clsx(
          "flex flex-shrink-0 items-center space-x-1 rounded-r-lg font-medium bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 text-sm border border-gray-200 focus:ring-indigo-600 focus:outline-indigo-600 focus:ring-2 focus:z-10"
        )}
      >
        Api
      </button>
    </div>
  );
};
export default Menu;
