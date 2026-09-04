import * as React from "react";

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  label?: string;
  style?: React.CSSProperties;
}

export declare function Separator(props: SeparatorProps): JSX.Element;
