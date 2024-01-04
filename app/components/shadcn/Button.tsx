import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "~/components/shadcn/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "text-sm px-3.5 py-2 h-9",
        default: "text-sm px-4 py-2.5 h-10",
        lg: "text-base px-[18px] py-2.5 h-11",
        xl: "text-base px-5 py-3 h-12",
        "2xl": "text-lg px-6 py-4 h-15",
      },
      iconButton: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", iconButton: true, class: "w-9 px-0" },
      { size: "default", iconButton: true, class: "w-10 px-0" },
      { size: "lg", iconButton: true, class: "w-11 px-0" },
      { size: "xl", iconButton: true, class: "w-12 px-0" },
      { size: "2xl", iconButton: true, class: "w-15 px-0" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      iconButton: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, iconButton, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, iconButton, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
