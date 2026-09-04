import * as React from "react";

export interface NavItemProps {
  icon?: string;
  label?: React.ReactNode;
  active?: boolean;
  badge?: React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function NavItem(props: NavItemProps): JSX.Element;
