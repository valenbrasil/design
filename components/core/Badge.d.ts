import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "brand" | "solid" | "success" | "warning" | "danger" | "info" | "outline";
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
