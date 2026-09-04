import * as React from "react";

export type SelectOption = string | { value: string; label: React.ReactNode };

export interface SelectProps {
  id?: string;
  options?: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
