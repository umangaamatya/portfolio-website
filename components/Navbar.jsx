import { pages } from "./siteData";

const labels = {
  about: "About",
  resume: "Resume",
  portfolio: "Portfolio",
  leadership: "Leadership",
  contact: "Contact",
};

export default function Navbar({ activePage, onChangePage }) {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li className="navbar-item" key={page}>
            <button
              type="button"
              className={`navbar-link ${activePage === page ? "active" : ""}`}
              onClick={() => onChangePage(page)}
              aria-current={activePage === page ? "page" : undefined}
            >
              {labels[page]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
