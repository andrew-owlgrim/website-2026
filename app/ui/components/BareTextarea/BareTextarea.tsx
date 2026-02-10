import clsx from "clsx";
import React, { type TextareaHTMLAttributes } from "react";
import s from "./BareTextarea.module.scss";

// Component

const BareTextarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(s.bareTextarea, "bareTextarea", className)}
      {...props}
    />
  );
});

BareTextarea.displayName = "BareTextarea";

// Export

export default BareTextarea;
