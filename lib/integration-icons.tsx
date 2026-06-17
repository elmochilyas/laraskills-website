import React from "react";

import OpenCodeIcon from "@lobehub/icons/es/OpenCode";
import ClaudeCodeIcon from "@lobehub/icons/es/ClaudeCode";
import CursorIcon from "@lobehub/icons/es/Cursor";
import GeminiCLIIcon from "@lobehub/icons/es/GeminiCLI";
import CodexIcon from "@lobehub/icons/es/Codex";
import GithubCopilotIcon from "@lobehub/icons/es/GithubCopilot";
import TraeIcon from "@lobehub/icons/es/Trae";
import QwenIcon from "@lobehub/icons/es/Qwen";
import CodeBuddyIcon from "@lobehub/icons/es/CodeBuddy";
import KiroIcon from "@lobehub/icons/es/Kiro";

type LobeIcon = React.ComponentType<{ size?: number | string; style?: React.CSSProperties }>;

type IconConfig =
  | { source: "lobehub"; Component: LobeIcon; hasColor: true }
  | { source: "lobehub"; Component: LobeIcon; hasColor: false }
  | { source: "inline"; path: string };

const registry: Record<string, IconConfig> = {
  opencode: { source: "lobehub", Component: OpenCodeIcon, hasColor: false },
  claude: { source: "lobehub", Component: ClaudeCodeIcon.Color, hasColor: true },
  cursor: { source: "lobehub", Component: CursorIcon, hasColor: false },
  googlegemini: { source: "lobehub", Component: GeminiCLIIcon.Color, hasColor: true },
  codex: { source: "lobehub", Component: CodexIcon.Color, hasColor: true },
  githubcopilot: { source: "lobehub", Component: GithubCopilotIcon, hasColor: false },
  trae: { source: "lobehub", Component: TraeIcon.Color, hasColor: true },
  qwen: { source: "lobehub", Component: QwenIcon.Color, hasColor: true },
  codebuddy: { source: "lobehub", Component: CodeBuddyIcon.Color, hasColor: true },
  kiro: { source: "lobehub", Component: KiroIcon.Color, hasColor: true },
  zedindustries: { source: "inline", path: "M2.25 1.5a.75.75 0 0 0-.75.75v16.5H0V2.25A2.25 2.25 0 0 1 2.25 0h20.095c1.002 0 1.504 1.212.795 1.92L10.764 14.298h3.486V12.75h1.5v1.922a1.125 1.125 0 0 1-1.125 1.125H9.264l-2.578 2.578h11.689V9h1.5v9.375a1.5 1.5 0 0 1-1.5 1.5H5.185L2.562 22.5H21.75a.75.75 0 0 0 .75-.75V5.25H24v16.5A2.25 2.25 0 0 1 21.75 24H1.655C.653 24 .151 22.788.86 22.08L13.19 9.75H9.75v1.5h-1.5V9.375A1.125 1.125 0 0 1 9.375 8.25h5.314l2.625-2.625H5.625V15h-1.5V5.625a1.5 1.5 0 0 1 1.5-1.5h13.19L21.438 1.5z" },
  vscode: { source: "inline", path: "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.6L10.39 12l7.614-5.188v10.376z" },
};

export function getToolIcon(iconKey: string): IconConfig | undefined {
  return registry[iconKey];
}

export function renderIconSvg(path: string, className = "h-5 w-5") {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="#fff"
    >
      <path d={path} />
    </svg>
  );
}
