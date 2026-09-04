import * as React from "react";

export interface FieldProps {
  label?: React.ReactNode;
  htmlFor?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Field(props: FieldProps): JSX.Element;
