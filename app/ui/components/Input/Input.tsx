import clsx from "clsx";
import React, {
  useState,
  type FC,
  type FocusEventHandler,
  type ReactNode,
} from "react";
import s from "./Input.module.scss";
import Button, { type ButtonProps } from "../Button/Button";

// Component

type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  uiSize?: InputSize;
  children?: ReactNode;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ uiSize = "md", className, onFocus, onBlur, children, ...rest }, ref) => {
    // Focus
    const [focused, setFocused] = useState(false);

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(true);
      onFocus?.(e); // вызвать внешний обработчик, если передан
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(false);
      onBlur?.(e);
    };

    //

    return (
      <label
        className={clsx(
          s.inputContainer,
          s[uiSize],
          focused && s.focused,
          className
        )}
      >
        <input ref={ref} onFocus={handleFocus} onBlur={handleBlur} {...rest} />
        {children}
      </label>
    );
  }
);

Input.displayName = "Input";

// Parts

const InputButton: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button size="sm" className={clsx(s.inputButton, className)} {...props} />
  );
};

InputButton.displayName = "InputButton";

// Export

export default Object.assign(Input, {
  Button: InputButton,
});
