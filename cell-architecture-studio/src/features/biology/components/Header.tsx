import { BookOpen, ChevronDown, Grid3X3, Library, Settings, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { CellItem } from "../../../data/schema/cell";

export function Header({ cell }: { cell: CellItem }) {
  return (
    <header className="topbar">
      <div className="brand-block">
        <div className="brand-orb" aria-hidden="true">
          <Sparkles size={26} />
        </div>
        <div>
          <h1>Cell Architecture Studio</h1>
          <p>Explore life at the microscopic level</p>
        </div>
      </div>

      <nav className="top-nav" aria-label="Primary">
        <Link to="/biology/cells">
          <Grid3X3 size={24} />
          <span>Gallery</span>
        </Link>
        <a href="#library">
          <Library size={24} />
          <span>Library</span>
        </a>
        <a href="#notebooks">
          <BookOpen size={24} />
          <span>Notebooks</span>
        </a>
        <a href="#settings">
          <Settings size={24} />
          <span>Settings</span>
        </a>
        <Link className="avatar-button" to="/login" aria-label="Sign in">
          <span className="avatar-core" style={{ background: cell.accentSoft }}>
            <span style={{ background: cell.accent }} />
          </span>
          <ChevronDown size={20} />
        </Link>
      </nav>
    </header>
  );
}
