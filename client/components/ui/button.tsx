import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-sans font-bold text-base leading-6 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "bg-gray-900 text-[#FBFCFD] hover:bg-gray-800 disabled:bg-gray-200 disabled:text-[#95A0AC]",
        muted: "bg-gray-100 text-[#1D2025] hover:bg-gray-200 hover:text-[#40464E] disabled:bg-gray-50 disabled:text-[#95A0AC]",
        outline: "border border-gray-900 bg-transparent text-[#1D2025] hover:bg-gray-50 hover:text-[#40464E] disabled:border-gray-300 disabled:text-[#95A0AC]",
        plain: "bg-transparent text-[#1D2025] hover:text-[#40464E] disabled:text-[#95A0AC]",
      },
      size: {
        large: "h-14 px-6",
        small: "h-10 px-4", 
        xsmall: "h-7 px-3",
      },
      width: {
        responsive: "w-auto min-w-fit",
        fixed: "w-auto",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "large",
      width: "responsive",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, width, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, width }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
