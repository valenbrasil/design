import * as React from "react";

export interface IconButtonProps {
  icon: string;
  label: string;
  variant?: "ghost" | "outline" | "solid" | "subtle";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
