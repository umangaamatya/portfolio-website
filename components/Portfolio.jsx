import ProjectCard from "./ProjectCard";
import { projectFilters } from "./siteData";

function formatFilterLabel(filter) {
  return filter === "all" ? "All" : filter.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Portfolio({
  isActive,
  activeFilter,
  filteredProjects,
  isSelectOpen,
  onToggleSelect,
  onChangeFilter,
}) {
  return (
    <article className={`portfolio ${isActive ? "active" : ""}`} aria-hidden={!isActive}>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {projectFilters.map((filter) => (
            <li className="filter-item" key={filter}>
              <button
                type="button"
                className={activeFilter === filter ? "active" : ""}
                onClick={() => onChangeFilter(filter)}
              >
                {formatFilterLabel(filter)}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            type="button"
            className={`filter-select ${isSelectOpen ? "active" : ""}`}
            onClick={onToggleSelect}
            aria-expanded={isSelectOpen}
            aria-controls="portfolio-filter-options"
          >
            <div className="select-value">{formatFilterLabel(activeFilter)}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list" id="portfolio-filter-options">
            {projectFilters.map((filter) => (
              <li className="select-item" key={filter}>
                <button type="button" onClick={() => onChangeFilter(filter)}>
                  {formatFilterLabel(filter)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </section>
    </article>
  );
}
