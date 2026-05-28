import { useEffect } from "react";
import type { CSSProperties } from "react";
import { useParams } from "react-router-dom";
import { getCellById } from "../../../data/cells";
import { BottomPanels } from "../../../features/biology/components/BottomPanels";
import { ComparisonModal } from "../../../features/biology/components/ComparisonModal";
import { Header } from "../../../features/biology/components/Header";
import { RightPanel } from "../../../features/biology/components/RightPanel";
import { Sidebar } from "../../../features/biology/components/Sidebar";
import { Stage } from "../../../features/biology/components/Stage";
import { Toast } from "../../../features/biology/components/Toast";
import { useCellViewer } from "../../../features/biology/hooks/useCellViewer";

export function CellViewerPage() {
  const { cellId } = useParams();
  const viewer = useCellViewer();

  useEffect(() => {
    if (!cellId) {
      return;
    }
    const cell = getCellById(cellId);
    if (cell.id === cellId) {
      viewer.setSelectedCellId(cellId);
    }
  }, [cellId, viewer.setSelectedCellId]);

  const shellStyle = {
    "--accent": viewer.selectedCell.accent,
    "--accent-soft": viewer.selectedCell.accentSoft,
    "--cell-color": viewer.selectedCell.color,
  } as CSSProperties;

  return (
    <div className="app-shell" style={shellStyle}>
      <Header cell={viewer.selectedCell} />

      <div className="app-grid">
        <Sidebar
          selectedCell={viewer.selectedCell}
          activeOrganelle={viewer.activeOrganelle}
          favorites={viewer.favorites}
          onSelectCell={viewer.setSelectedCellId}
          onSelectOrganelle={viewer.setActiveOrganelle}
          onToggleFavorite={viewer.toggleFavorite}
        />

        <div className="center-stack">
          <Stage
            cell={viewer.selectedCell}
            activeOrganelle={viewer.activeOrganelle}
            viewMode={viewer.viewMode}
            crossSection={viewer.crossSection}
            autoRotate={viewer.autoRotate}
            resetKey={viewer.resetKey}
            onModeChange={viewer.setViewMode}
            onCrossSectionChange={viewer.setCrossSection}
            onAutoRotateChange={viewer.setAutoRotate}
            onReset={viewer.resetView}
            onToast={viewer.showToast}
          />
          <BottomPanels
            cell={viewer.selectedCell}
            onCompare={() => viewer.setComparisonOpen(true)}
            onToast={viewer.showToast}
          />
        </div>

        <RightPanel
          cell={viewer.selectedCell}
          activeOrganelle={viewer.activeOrganelle}
          favorites={viewer.favorites}
          mastery={viewer.mastery}
          viewedCellCount={viewer.viewedCellCount}
          viewedOrganelleCount={viewer.viewedOrganelleCount}
          totalOrganelleCount={viewer.totalOrganelleCount}
          tutorPrompt={viewer.tutorPrompt}
          onToggleFavorite={viewer.toggleFavorite}
          onTutorPrompt={(prompt) => {
            viewer.setTutorPrompt(prompt);
            viewer.showToast("AI tutor prompt staged.");
          }}
        />
      </div>

      <ComparisonModal
        cell={viewer.selectedCell}
        open={viewer.comparisonOpen}
        onClose={() => viewer.setComparisonOpen(false)}
      />
      <Toast message={viewer.toast} />
    </div>
  );
}
