import clsx from "clsx";
import * as React from "react";

import { Spinner } from "../Spinner";

const variants = {
  primary: "bg-purple-400 text-white hover:bg-purple-700",
  disabled: "bg-purple-100 text-white cursor-not-allowed",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  default: "hover:bg-gray-200 text-gray-700",
  white: "bg-white hover:bg-gray-100 text-gray-700 border",
  outline: "hover:bg-gray-100 text-gray-700 border",
};

const sizes = {
  xs: "px-4 py-2 text-sm",
  sm: "px-4 py-3 text-sm",
  md: "px-6 py-3.5 text-base",
  lg: "px-8 py-4 text-lg",
  icon: "",
};

type SVGComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  IconAfter?: SVGComponent;
  IconBefore?: SVGComponent;
};

const getIconColor = (variant: string) => {
  if (variant === "default" || variant === "outline") {
    return "text-gray-500";
  }
  return "text-gray-700";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isLoading = false,
      type = "button",
      variant = "default",
      size = "sm",
      className = "",
      disabled = false,
      IconBefore,
      IconAfter,
      ...props
    },
    ref
  ) => {
    return (
      <button
        type={type}
        ref={ref}
        className={clsx(
          "p-2 flex flex-shrink-0 items-center space-x-1 rounded-md font-medium",
          sizes[size],
          `${disabled ? variants["disabled"] : variants[variant]}`,
          className
        )}
        {...props}
      >
        {IconBefore && (
          <IconBefore
            className={clsx("h-5 w-5 cursor-pointer", getIconColor(variant))}
          />
        )}
        {children && <span>{children}</span>}
        {isLoading && (
          <Spinner
            variant={variant !== "primary" ? "primary" : "primary"}
            size="sm"
          />
        )}
        {IconAfter && (
          <IconAfter
            className={clsx("h-5 w-5 cursor-pointer", getIconColor(variant))}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
