import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";

export const DashboardNavbar = ({
  openSidebar,
}: {
  openSidebar: () => void;
}) => {
  return (
    <div className="md:hidden bg-white py-3 w-auto flex items-center min-w-max shadow px-4 justify-between">
      <div className="flex items-center space-x-2">
        <div className="p-4 bg-purple-600 rounded-md"></div>
        <h2 className="text-lg font-semibold text-gray-700">Untitled UI</h2>
      </div>

      <div className="flex justify-between">
        <nav className="flex space-x-14 max-w-6xl"></nav>

        <Bars3CenterLeftIcon
          className="text-gray-700 w-10 h-10 cursor-pointer"
          onClick={openSidebar}
        />
      </div>
    </div>
  );
};
