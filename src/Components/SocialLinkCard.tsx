import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { ClickActions } from "./ClickActions";
import { SocialLinkCardProps } from "./SocialLinkCardProps";

const openLink = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};
const copyLink = (clipboardText: string) => {
  navigator.clipboard.writeText(clipboardText);
};

export function SocialLinkCard({
  name,
  ToolTip,
  clickAction,
  clipboardCopyText,
  SocialLink,
  icon,
}: SocialLinkCardProps) {
  const [currentToolTipText, updateToolTipText] = useState(ToolTip);

  function copyAndChangeToolTip(altText: string, textToCopy: string) {
    if (ToolTip == undefined) return;
    updateToolTipText(altText);
    copyLink(textToCopy);
    setTimeout(() => {
      updateToolTipText(ToolTip);
    }, 2000);
  }

  function generateToolTip() {
    return (
      <Tooltip
        anchorSelect={"#" + name}
        content={currentToolTipText}
        className="tooltip"
      />
    );
  }

  return (
    <>
      <a
        id={name}
        onClickCapture={() => {
          switch (clickAction) {
            case ClickActions.copyTextToClipboard:
              return copyAndChangeToolTip("Copied!", clipboardCopyText ?? "");
            case ClickActions.openLink:
              return openLink(SocialLink ?? ".");

            default:
            case ClickActions.None:
              return function empty() {};
          }
        }}
        style={{ cursor: "pointer" }}>
        <div className="connectionIcon">
          {icon}
          {name}
        </div>
      </a>
      {ToolTip != undefined ? generateToolTip() : <></>}
    </>
  );
}
