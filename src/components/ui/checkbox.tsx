"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"; // lib de componentes acessíveis sem estilos, mas com comportamento pronto
import { Check } from "lucide-react";

import { cn } from "@lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      // tamanho e base
      "peer h-5 w-5 shrink-0 rounded-md border border-zinc-300 transition-colors",
      // foco e acessibilidade
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      // desabilitado
      "disabled:cursor-not-allowed disabled:opacity-50",
      // estado marcado
      "data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-600",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-6 text-white" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
