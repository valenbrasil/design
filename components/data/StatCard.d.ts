import * as React from "react";

export interface StatCardProps {
  label?: React.ReactNode;
  value?: React.ReactNode;
  delta?: React.ReactNode;
  deltaTone?: "up" | "down" | "neutral";
  icon?: string;
  style?: React.CSSProperties;
}

export declare function StatCard(props: StatCardProps): JSX.Element;
