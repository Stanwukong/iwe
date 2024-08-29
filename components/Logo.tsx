import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define the variants for the Logo component
const logoVariants = cva(
  "font-semibold inline-flex items-center justify-center whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        subtle: "text-muted-foreground",
        bold: "text-bold-foreground",
        accent: "text-accent-foreground",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// Define the interface for the Logo component props
export interface LogoProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof logoVariants> {
  asChild?: boolean;
}

// Create the Logo component using forwardRef
const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        className={cn(logoVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
          <span className="text-accent mr-1">|</span>wé
      </Comp>
    );
  }
);
Logo.displayName = "Logo";

export { Logo, logoVariants };
