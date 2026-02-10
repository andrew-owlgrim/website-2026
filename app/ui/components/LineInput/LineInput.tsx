import clsx from "clsx";
import React, { type ReactNode } from "react";
import s from "./LineInput.module.scss";

// Component

type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface LineInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  uiSize?: InputSize;
}

const LineInput = React.forwardRef<HTMLInputElement, LineInputProps>(
  ({ uiSize = "md", className, ...rest }, ref) => {
    return (
      <label
        className={clsx(s.inputContainer, s[uiSize], "line-input", className)}
      >
        <input ref={ref} {...rest} />
      </label>
    );
  }
);

LineInput.displayName = "LineInput";

// Export

export default LineInput;
