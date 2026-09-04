import * as React from "react";

export interface LogoProps {
  variant?: "full" | "icon";
  height?: number;
  base?: string;
  style?: React.CSSProperties;
}

export declare function Logo(props: LogoProps): JSX.Element;
