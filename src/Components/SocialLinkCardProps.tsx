import { ReactElement } from "react";
import { ClickActions } from "./ClickActions";

export type SocialLinkCardProps = {
  name: string;
  ToolTip?: string;
  SocialLink?: string;
  clickAction: ClickActions;
  clipboardCopyText?: string;
  icon: ReactElement;
};
