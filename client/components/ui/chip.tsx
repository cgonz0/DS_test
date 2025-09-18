import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "bg-[#1D2025] text-[#EDEFF2]",
        outline: "border border-[#1D2025] text-[#1D2025] bg-transparent",
        plain: "bg-[#EDEFF2] text-[#1D2025]",
      },
      size: {
        small: "text-xs h-6 px-3 rounded-full",
        medium: "text-sm h-10 px-4 rounded-2xl",
        large: "text-base h-14 px-5 rounded-[56px]",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "medium",
    },
  },
);

const chipCloseVariants = cva(
  "ml-2 flex-shrink-0 rounded-full transition-colors hover:bg-black/10",
  {
    variants: {
      size: {
        small: "w-4 h-4",
        medium: "w-5 h-5",
        large: "w-6 h-6",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  removable?: boolean;
  onRemove?: () => void;
  leftElement?: React.ReactNode;
}

function Chip({ 
  className, 
  variant, 
  size, 
  removable = false, 
  onRemove, 
  leftElement,
  children,
  ...props 
}: ChipProps) {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div className={cn(chipVariants({ variant, size }), className)} {...props}>
      {leftElement && (
        <div className={cn(
          "flex-shrink-0",
          size === "small" ? "mr-2" : size === "medium" ? "mr-2" : "mr-2"
        )}>
          {leftElement}
        </div>
      )}
      <span className="font-bold leading-none">{children}</span>
      {removable && (
        <button
          onClick={handleRemove}
          className={cn(chipCloseVariants({ size }))}
          aria-label="Remove"
        >
          <X className={cn(
            "text-[#CCD1D8]",
            size === "small" ? "w-3 h-3" : size === "medium" ? "w-4 h-4" : "w-5 h-5"
          )} />
        </button>
      )}
    </div>
  );
}

export { Chip, chipVariants };
