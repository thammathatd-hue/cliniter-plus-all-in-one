import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxury transition-luxury font-premium font-semibold",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-luxury transition-luxury font-premium",
        outline: "border-3 border-primary bg-background/95 text-primary hover:bg-primary hover:text-primary-foreground shadow-luxury transition-luxury font-premium font-bold backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-luxury transition-luxury font-premium font-semibold",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-luxury font-premium",
        link: "text-primary underline-offset-4 hover:underline transition-luxury font-premium",
        cta: "bg-gradient-primary text-primary-foreground hover:shadow-glow transform hover:scale-105 hover:shadow-excellence transition-excellence font-premium font-bold shadow-luxury",
        hero: "bg-gradient-accent text-white hover:shadow-glow transform hover:scale-105 hover:shadow-excellence transition-excellence font-premium font-bold shadow-premium",
        medical: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-luxury transition-luxury font-premium font-medium",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10",
        icon: "h-12 w-12",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };