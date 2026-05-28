import { Box, CircleDot, type LucideIcon } from "lucide-react";
import type { ViewMode } from "../../data/schema/cell";

export type ModeOption = {
  id: ViewMode;
  label: string;
  Icon: LucideIcon;
};

export const modeOptions: ModeOption[] = [
  { id: "mesh", label: "Mesh", Icon: Box },
  { id: "focus", label: "Focus", Icon: CircleDot },
];

export const DEFAULT_CELL_ID = "animal";
