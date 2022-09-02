import {
  HomeIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  UsersIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

export type SideBarLinkProps = {
  link: string;
  name: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  badge?: {
    text: string | number;
  };
  active?: boolean;
};

export const SIDEBAR_LINKS: SideBarLinkProps[] = [
  {
    link: "/",
    name: "Home",
    Icon: HomeIcon,
  },
  {
    link: "/",
    name: "Dashboard",
    Icon: ChartBarIcon,
    badge: {
      text: 12,
    },
  },
  {
    link: "/",
    name: "Projects",
    Icon: HomeIcon,
  },
  {
    link: "/",
    name: "Tasks",
    Icon: ClipboardDocumentIcon,
  },
  {
    link: "/",
    name: "Reports",
    Icon: FlagIcon,
  },
  {
    link: "/",
    name: "Users",
    Icon: UsersIcon,
  },
];
