import { ChevronDown, Leaf, Sparkles, Star } from "lucide-react";
import { cells } from "../../../data/cells";
import type { CellItem } from "../../../data/schema/cell";
import { MiniCell } from "./MiniCell";

export type SidebarProps = {
  selectedCell: CellItem;
  activeOrganelle: string;
  favorites: Set<string>;
  onSelectCell: (id: string) => void;
  onSelectOrganelle: (id: string) => void;
  onToggleFavorite: (id: string) => void;
};

export function Sidebar({
  selectedCell,
  activeOrganelle,
  favorites,
  onSelectCell,
  onSelectOrganelle,
  onToggleFavorite,
}: SidebarProps) {
  return (
    <aside className="left-rail">
      <section className="panel cell-type-panel">
        <div className="panel-heading">
          <span>
            <Leaf size={18} />
            Cell Types
          </span>
          <ChevronDown size={18} />
        </div>

        <div className="cell-list">
          {cells.map((cell) => {
            const selected = selectedCell.id === cell.id;
            return (
              <button
                className={`cell-row ${selected ? "is-active" : ""}`}
                type="button"
                key={cell.id}
                onClick={() => onSelectCell(cell.id)}
              >
                <MiniCell cell={cell} />
                <span className="cell-row-copy">
                  <strong>{cell.name}</strong>
                  <span>{cell.type}</span>
                </span>
                <span
                  className={`favorite-dot ${favorites.has(cell.id) ? "is-on" : ""}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    onToggleFavorite(cell.id);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Favorite ${cell.name}`}
                >
                  <Star size={18} fill="currentColor" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="panel organelle-panel">
        <div className="panel-heading">
          <span>
            <Sparkles size={16} />
            Organelles
          </span>
          <ChevronDown size={18} />
        </div>

        <div className="organelle-list">
          {selectedCell.organelles.map((organelle) => (
            <button
              className={`organelle-row ${activeOrganelle === organelle.id ? "is-active" : ""}`}
              type="button"
              key={organelle.id}
              onClick={() => onSelectOrganelle(organelle.id)}
            >
              <span className="color-dot" style={{ background: organelle.color }} />
              <span>{organelle.name}</span>
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}
