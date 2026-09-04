import * as React from "react";

export interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  tone?: "neutral" | "success" | "danger";
  onClose?: () => void;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
