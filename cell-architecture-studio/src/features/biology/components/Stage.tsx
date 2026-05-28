import { Box, Camera, CircleDot, EyeOff, RotateCcw } from "lucide-react";
import { CellScene } from "../../../components/three/CellScene";
import type { CellItem, ViewMode } from "../../../data/schema/cell";
import { modeOptions } from "../constants";

export type StageProps = {
  cell: CellItem;
  activeOrganelle: string;
  viewMode: ViewMode;
  crossSection: boolean;
  autoRotate: boolean;
  resetKey: number;
  onModeChange: (mode: ViewMode) => void;
  onCrossSectionChange: (value: boolean) => void;
  onAutoRotateChange: (value: boolean) => void;
  onReset: () => void;
  onToast: (message: string) => void;
};

export function Stage({
  cell,
  activeOrganelle,
  viewMode,
  crossSection,
  autoRotate,
  resetKey,
  onModeChange,
  onCrossSectionChange,
  onAutoRotateChange,
  onReset,
  onToast,
}: StageProps) {
  return (
    <main className="stage-column">
      <section className="stage-panel">
        <div className="stage-title">
          <div>
            <h2>{cell.name}</h2>
            <p>{cell.type}</p>
          </div>

          <div className="view-card">
            <span>View Mode</span>
            <div className="mode-switcher">
              {modeOptions.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={viewMode === id ? "is-active" : ""}
                  onClick={() => onModeChange(id)}
                  title={label}
                >
                  <Icon size={22} />
                </button>
              ))}
            </div>
            <label className="toggle-line">
              <span>Cross Section</span>
              <input
                type="checkbox"
                checked={crossSection}
                onChange={(event) => onCrossSectionChange(event.target.checked)}
              />
              <i />
            </label>
          </div>
        </div>

        <div className="canvas-wrap">
          <CellScene
            cell={cell}
            activeOrganelle={activeOrganelle}
            viewMode={viewMode}
            crossSection={crossSection}
            autoRotate={autoRotate}
            resetKey={resetKey}
          />
        </div>

        <div className="stage-toolbar">
          <button
            type="button"
            className={autoRotate ? "is-active" : ""}
            onClick={() => onAutoRotateChange(!autoRotate)}
          >
            <RotateCcw size={20} />
            Rotate
          </button>
          <button type="button" onClick={() => onModeChange("focus")}>
            <CircleDot size={20} />
            Isolate
          </button>
          <button type="button" onClick={() => onModeChange("focus")}>
            <EyeOff size={20} />
            Hide Others
          </button>
          <button type="button" onClick={onReset}>
            <RotateCcw size={20} />
            Reset View
          </button>
        </div>

        <div className="export-toolbar">
          <button type="button" onClick={() => onToast("Screenshot placeholder.")}>
            <Camera size={20} />
            Screenshot
          </button>
          <button type="button" onClick={() => onToast("GLB export requires a model export pipeline.")}>
            <Box size={20} />
            GLB Export
          </button>
        </div>
      </section>
    </main>
  );
}
