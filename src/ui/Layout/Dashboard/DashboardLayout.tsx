import { useState } from "react";
import { DashboardNavbar } from "./DashboardNavbar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardMobileSideBar } from "./DashboardMobileSidebar";

type LayoutProps = {
  children?: React.ReactNode;
};

export const DashboardLayout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative flex items-start ">
      <DashboardMobileSideBar isOpen={isOpen} closeSidebar={closeSidebar} />
      <DashboardSidebar />
      <div className="w-full">
        <DashboardNavbar openSidebar={openSidebar} />
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};
