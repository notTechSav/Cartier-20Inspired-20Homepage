import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] text-sm font-light uppercase tracking-uppercase ring-offset-background transition-all duration-250 ease-out focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-luxury-black text-luxury-white hover:bg-gray-900 focus:ring-gray-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-gray-700 hover:bg-gray-100",
        link: "text-gray-900 underline underline-offset-4 hover:opacity-70",
        ctaPrimary:
          "px-12 py-5 bg-luxury-black text-luxury-white hover:bg-gray-900 focus:ring-gray-300 focus:ring-offset-2 active:opacity-90",
        ctaSecondary:
          "px-12 py-5 border border-luxury-black bg-transparent text-luxury-black transition-all duration-400 ease-out hover:bg-luxury-black hover:text-luxury-white focus:ring-gray-300 focus:ring-offset-2",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-10 px-4",
        lg: "h-12 px-8",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
