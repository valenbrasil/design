import * as React from "react";

export interface IconProps {
  name: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

export declare function Icon(props: IconProps): JSX.Element;
