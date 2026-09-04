import * as React from "react";

export interface AlertProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  tone?: "info" | "success" | "warning" | "danger" | "brand";
  icon?: string;
  style?: React.CSSProperties;
}

export declare function Alert(props: AlertProps): JSX.Element;
