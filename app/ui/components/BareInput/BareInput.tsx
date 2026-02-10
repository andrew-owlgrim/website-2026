import clsx from "clsx";
import React, { type InputHTMLAttributes } from "react";
import s from "./BareInput.module.scss";

// Component

const BareInput = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(s.bareInput, "bareInput", className)}
      {...props}
    />
  );
});

BareInput.displayName = "BareInput";

// Export

export default BareInput;
