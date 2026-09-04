import * as React from "react";

export interface InputProps {
  id?: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  type?: string;
  size?: "sm" | "md" | "lg";
  iconLeft?: string;
  invalid?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
