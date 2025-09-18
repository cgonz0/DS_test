import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "bg-[#1D2025] text-[#EDEFF2]",
        outline: "border border-[#1D2025] text-[#1D2025] bg-transparent",
        plain: "bg-[#EDEFF2] text-[#1D2025]",
      },
      size: {
        small: "text-xs leading-5 rounded-full",
        medium: "text-sm leading-5 rounded-xl",
        large: "text-base leading-6 rounded-[56px]",
      },
      removable: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Small size padding variants
      {
        size: "small",
        removable: false,
        className: "px-5 py-0.5",
      },
      {
        size: "small",
        removable: true,
        className: "pl-3 pr-1 py-0.5",
      },
      // Medium size padding variants
      {
        size: "medium",
        removable: false,
        className: "px-5 py-2.5",
      },
      {
        size: "medium",
        removable: true,
        className: "pl-4 pr-2 py-2.5",
      },
      // Large size padding variants
      {
        size: "large",
        removable: false,
        className: "px-5 py-4.5",
      },
      {
        size: "large",
        removable: true,
        className: "pl-5 pr-2 py-4",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "medium",
      removable: false,
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
    <div className={cn(chipVariants({ variant, size, removable }), className)} {...props}>
      {leftElement && (
        <div className={cn(
          "flex-shrink-0",
          size === "small" ? "mr-2" : size === "medium" ? "mr-2" : "mr-2"
        )}>
          {leftElement}
        </div>
      )}
      <span>{children}</span>
      {removable && (
        <button
          onClick={handleRemove}
          className={cn(chipCloseVariants({ size }))}
          aria-label="Remove"
        >
          <X className={cn(
            "text-[#CCD1D8]",
            size === "small" ? "w-4 h-4" : size === "medium" ? "w-5 h-5" : "w-6 h-6"
          )} />
        </button>
      )}
    </div>
  );
}

export { Chip, chipVariants };
