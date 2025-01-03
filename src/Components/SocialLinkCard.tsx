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
  AltToolTip,
}: SocialLinkCardProps) {
  const [currentToolTipText, updateToolTipText] = useState(ToolTip);

  function changeToolTip(altText: string) {
    if (altText == undefined) return;
    if (ToolTip == undefined) return;
    updateToolTipText(altText);
    setTimeout(() => {
      updateToolTipText(ToolTip);
    }, 2000);
  }

  function copyAndChangeToolTip(altText: string, textToCopy: string) {
    if (ToolTip == undefined) return;
    copyLink(textToCopy);
    changeToolTip(altText);
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
            case ClickActions.displayAltToolTip:
              return changeToolTip(AltToolTip ?? "");

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
