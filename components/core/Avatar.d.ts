import * as React from "react";

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
