import * as React from "react";

export interface TableColumn {
  key: string;
  label: React.ReactNode;
  align?: "left" | "right" | "center";
  render?: (row: any) => React.ReactNode;
}

export interface TableProps {
  columns?: TableColumn[];
  rows?: any[];
  style?: React.CSSProperties;
}

export declare function Table(props: TableProps): JSX.Element;
