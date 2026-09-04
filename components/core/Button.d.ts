import * as React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  size?: "sm" | "md" | "lg";
  iconLeft?: string;
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
