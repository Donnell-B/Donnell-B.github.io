import { ReactElement } from "react";

export interface SMConnection {
  name: string;
  link: string;
  icon: ReactElement;
  highlightColor?: string;
}
