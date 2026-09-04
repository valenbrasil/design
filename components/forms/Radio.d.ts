import * as React from "react";

export type RadioOption = string | { value: string; label: React.ReactNode; hint?: React.ReactNode };

export interface RadioProps {
  options?: RadioOption[];
  value?: string;
  defaultValue?: string;
  name?: string;
  onChange?: (value: string) => void;
  orientation?: "vertical" | "row";
  style?: React.CSSProperties;
}

export declare function Radio(props: RadioProps): JSX.Element;
