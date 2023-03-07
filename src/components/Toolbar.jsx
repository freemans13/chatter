import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { Pencil2Icon, GearIcon } from '@radix-ui/react-icons';
import './Toolbar.css';

export default function ToolbarComponent() {
  return (
    <Toolbar.Root className="ToolbarRoot" aria-label="Chat options">
      <Toolbar.Button className="ToolbarButton" style={{ marginLeft: 'auto' }} aria-label="Settings">
        <GearIcon />
      </Toolbar.Button>
      <Toolbar.Separator className="ToolbarSeparator" />
      <Toolbar.Button className="ToolbarButton" aria-label="New Chat">
        <Pencil2Icon />
      </Toolbar.Button>
    </Toolbar.Root>
  );
}
