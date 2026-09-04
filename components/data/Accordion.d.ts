import * as React from "react";

export interface AccordionItem {
  question: React.ReactNode;
  answer: React.ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  defaultOpen?: number;
  style?: React.CSSProperties;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
