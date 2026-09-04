import * as React from "react";

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  style?: React.CSSProperties;
}

export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
