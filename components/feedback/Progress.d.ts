import * as React from "react";

export interface ProgressProps {
  value?: number;
  label?: React.ReactNode;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export declare function Progress(props: ProgressProps): JSX.Element;
