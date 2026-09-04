import * as React from "react";

export interface CardProps {
  children?: React.ReactNode;
  padding?: string;
  tone?: "default" | "subtle" | "brand" | "contrast";
  interactive?: boolean;
  style?: React.CSSProperties;
}

export interface CardHeaderProps {
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
export declare function CardHeader(props: CardHeaderProps): JSX.Element;
