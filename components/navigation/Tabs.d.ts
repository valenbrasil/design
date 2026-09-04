import * as React from "react";

export type TabItem = string | { value: string; label: React.ReactNode; count?: number };

export interface TabsProps {
  items?: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "underline" | "pill";
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): JSX.Element;
