import { useEffect, useMemo, useRef, useState } from "react";
import { cells, getCellById } from "../../../data/cells";
import type { ViewMode } from "../../../data/schema/cell";
import { DEFAULT_CELL_ID } from "../constants";

const initialCell = getCellById(DEFAULT_CELL_ID);

export function useCellViewer() {
  const [selectedCellId, setSelectedCellId] = useState(initialCell.id);
  const [activeOrganelle, setActiveOrganelle] = useState(initialCell.defaultOrganelle);
  const [viewMode, setViewMode] = useState<ViewMode>("mesh");
  const [crossSection, setCrossSection] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set([initialCell.id]));
  const [viewedCells, setViewedCells] = useState<Set<string>>(() => new Set([initialCell.id]));
  const [viewedOrganelleKeys, setViewedOrganelleKeys] = useState<Set<string>>(
    () => new Set([`${initialCell.id}:${initialCell.defaultOrganelle}`]),
  );
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [tutorPrompt, setTutorPrompt] = useState(
    `Guide me through finding ${initialCell.organelles[0].name} inside the 3D model.`,
  );
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  const selectedCell = useMemo(() => getCellById(selectedCellId), [selectedCellId]);
  const totalOrganelleCount = useMemo(
    () => cells.reduce((total, cell) => total + cell.organelles.length, 0),
    [],
  );
  const mastery = useMemo(() => {
    const cellCoverage = viewedCells.size / cells.length;
    const organelleCoverage = viewedOrganelleKeys.size / totalOrganelleCount;
    return Math.round((cellCoverage * 0.42 + organelleCoverage * 0.58) * 100);
  }, [totalOrganelleCount, viewedCells, viewedOrganelleKeys]);

  useEffect(() => {
    setActiveOrganelle(selectedCell.defaultOrganelle);
    setComparisonOpen(false);
  }, [selectedCell]);

  useEffect(() => {
    setViewedCells((current) => {
      const next = new Set(current);
      next.add(selectedCell.id);
      return next;
    });
    setViewedOrganelleKeys((current) => {
      const next = new Set(current);
      next.add(`${selectedCell.id}:${activeOrganelle}`);
      return next;
    });
  }, [activeOrganelle, selectedCell.id]);

  function showToast(message: string) {
    setToast(message);
    if (toastTimer.current) {
      window.clearTimeout(toastTimer.current);
    }
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }

  function toggleFavorite(id: string) {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function resetView() {
    setResetKey((key) => key + 1);
    showToast("View reset.");
  }

  return {
    selectedCell,
    activeOrganelle,
    viewMode,
    crossSection,
    autoRotate,
    resetKey,
    favorites,
    mastery,
    viewedCellCount: viewedCells.size,
    viewedOrganelleCount: viewedOrganelleKeys.size,
    totalOrganelleCount,
    comparisonOpen,
    tutorPrompt,
    toast,
    setSelectedCellId,
    setActiveOrganelle,
    setViewMode,
    setCrossSection,
    setAutoRotate,
    setComparisonOpen,
    setTutorPrompt,
    showToast,
    toggleFavorite,
    resetView,
  };
}
