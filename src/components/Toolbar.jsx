import React from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import {
  Pencil2Icon,
  GearIcon,
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";
import "./Toolbar.css";

const ToolbarComponent = () => (
  <Toolbar.Root className="ToolbarRoot" aria-label="Chat options">
    <Toolbar.Button
      className="ToolbarButton"
      style={{ marginLeft: "auto" }}
      aria-label="Settings"
    >
      <GearIcon />
    </Toolbar.Button>
    <Toolbar.Separator className="ToolbarSeparator" />
    <Toolbar.Button className="ToolbarButton" aria-label="New Chat">
      <Pencil2Icon />
    </Toolbar.Button>
  </Toolbar.Root>
);

export default ToolbarComponent;
