import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "~/components/builduifast/utils";

const buttonVariant = cva(
  "inline-flex items-center justify-center rounded-lg font-medium text-white transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-gray-900 shadow hover:enabled:bg-gray-900/80",
        outline:
          "text-gray-700 shadow-sm hover:enabled:bg-gray-200 hover:enabled:text-gray-900",
        secondary:
          "bg-gray-100 text-gray-500 shadow-sm hover:enabled:bg-gray-100/80",
        ghost:
          "text-gray-700 hover:enabled:bg-gray-100 hover:enabled:text-gray-900",
        link: "text-gray-700 underline-offset-4 hover:enabled:underline hover:enabled:text-gray-900",
      },
      size: {
        sm: "text-sm px-3.5 py-2 h-9",
        md: "text-sm px-4 py-2.5 h-10",
        lg: "px-[18px] py-2.5 h-11",
        xl: "px-5 py-3 h-12",
        "2xl": "text-lg px-6 py-4 h-15",
      },
      iconButton: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", iconButton: true, class: "w-9 px-0" },
      { size: "md", iconButton: true, class: "w-10 px-0" },
      { size: "lg", iconButton: true, class: "w-11 px-0" },
      { size: "xl", iconButton: true, class: "w-12 px-0" },
      { size: "2xl", iconButton: true, class: "w-15 px-0" },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      iconButton: false,
    },
  },
);

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariant> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, iconButton, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariant({
            variant,
            size,
            iconButton,
            className,
          }),
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

function ButtonDemo() {
  return <Button>Button</Button>;
}
