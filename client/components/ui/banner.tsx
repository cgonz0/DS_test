import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Common banner surface with gradient edges and soft shadow to match Figma
const baseSurface =
  "rounded-xl shadow-[0_1px_0_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.06)] banner-surface";

// Each variant only sets the CSS variables for the surface; the surface class composes the gradient/background
const bannerVariants = cva(
  `flex w-full items-center gap-4 md:gap-6 p-4 md:p-5 ${baseSurface} text-[var(--sk-alias-texttitle)]`,
  {
    variants: {
      variant: {
        pink: "bg-[var(--sk-alias-pinkmutedbackground)]",
        lightPurple: "bg-[var(--sk-alias-lightpurplemutedbackground)]",
        purple: "bg-[var(--sk-alias-purplemutedbackground)]",
        deepPurple: "bg-[var(--sk-alias-deeppurplemutedbackground)]",
        indigo: "bg-[var(--sk-alias-indigomutedbackground)]",
        lightBlue: "bg-[var(--sk-alias-lightbluemutedbackground)]",
        blue: "bg-[var(--sk-alias-bluemutedbackground)]",
        turquoise: "bg-[var(--sk-alias-turquoisemutedbackground)]",
        teal: "bg-[var(--sk-alias-tealmutedbackground)]",
        lightGreen: "bg-[var(--sk-alias-lightgreenmutedbackground)]",
        green: "bg-[var(--sk-alias-greenmutedbackground)]",
        lime: "bg-[var(--sk-alias-limemutedbackground)]",
        yellow: "bg-[var(--sk-alias-yellowmutedbackground)]",
        amber: "bg-[var(--sk-alias-ambermutedbackground)]",
        deepOrange: "bg-[var(--sk-alias-deeporangemutedbackground)]",
        orange: "bg-[var(--sk-alias-orangemutedbackground)]",
        brown: "bg-[var(--sk-alias-brownmutedbackground)]",
        slate: "bg-[var(--sk-alias-slatemutedbackground)]",
        info: "bg-[var(--sk-alias-infomutedbackground)]",
        success: "bg-[var(--sk-alias-successmutedbackground)]",
        warning: "bg-[var(--sk-alias-warningmutedbackground)]",
        error: "bg-[var(--sk-alias-errormutedbackground)]",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  title: string;
  description: string;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  onClose?: () => void;
  showIcon?: boolean;
  icon?: React.ReactNode;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      variant,
      title,
      description,
      primaryAction,
      secondaryAction,
      onClose,
      showIcon = true,
      icon,
      ...props
    },
    ref,
  ) => {
    const bgStyle: React.CSSProperties = {
      backgroundColor: `var(--sk-alias-${(variant ?? "info").toString().toLowerCase()}mutedbackground)`,
    };
    return (
      <div
        ref={ref}
        className={cn(bannerVariants({ variant }), className)}
        role="region"
        style={{ ...(props.style || {}), ...bgStyle }}
        {...props}
      >
        {showIcon && (
          <div className="flex-shrink-0 mt-0.5 text-[var(--sk-alias-texttitle)]">
            {icon || (
              <ThumbsUp
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              />
            )}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 md:gap-6 justify-between w-full">
            {/* Text */}
            <div className="min-w-0">
              <h3 className="font-sans font-semibold text-base leading-6 text-[var(--sk-alias-texttitle)] truncate">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-5 text-[var(--sk-alias-textbody)]">
                {description}
              </p>
            </div>

            {/* Actions on the right */}
            {(primaryAction || secondaryAction || onClose) && (
              <div className="flex items-center gap-3 flex-shrink-0 self-start md:self-center">
                {primaryAction && (
                  <button
                    onClick={primaryAction.onClick}
                    className="text-sm font-semibold text-[var(--sk-alias-texttitle)] hover:underline focus:outline-none focus:underline"
                  >
                    {primaryAction.label}
                  </button>
                )}
                {secondaryAction && (
                  <button
                    onClick={secondaryAction.onClick}
                    className="text-sm font-semibold text-[var(--sk-alias-texttitle)] hover:underline focus:outline-none focus:underline"
                  >
                    {secondaryAction.label}
                  </button>
                )}
                {onClose && (
                  <button
                    onClick={onClose}
                    className="ml-1 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                    aria-label="Close banner"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Banner.displayName = "Banner";

export { Banner, bannerVariants };
