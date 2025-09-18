import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center gap-2 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-[20px]",
  {
    variants: {
      variant: {
        solid: "bg-[#1D2025] text-[#EDEFF2]",
        outline: "border border-[#1D2025] text-[#1D2025] bg-transparent",
        plain: "bg-[#EDEFF2] text-[#1D2025]",
      },
      size: {
        small: "h-6 px-3 text-xs",
        medium: "h-10 px-4 text-sm",
        large: "h-14 px-5 text-base", // 56px height
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "medium",
    },
  },
);

const chipCloseVariants = cva(
  "ml-2 flex-shrink-0 inline-flex items-center justify-center rounded-full bg-[#CCD1D8] text-[#40464E] transition-colors hover:bg-[#B8BFC8]",
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
        <div className="flex-shrink-0">
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
            size === "small" ? "w-3 h-3" : size === "medium" ? "w-4 h-4" : "w-5 h-5"
          )} />
        </button>
      )}
    </div>
  );
}

export { Chip, chipVariants };
