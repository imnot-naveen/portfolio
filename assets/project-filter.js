const filters = document.querySelector("[data-project-filters]");
const status = document.querySelector("[data-filter-status]");
const projects = [...document.querySelectorAll("[data-category]")];

if (filters && status && projects.length) {
  const buttons = [...filters.querySelectorAll("[data-filter]")];

  filters.addEventListener("click", (event) => {
    const selected = event.target.closest("[data-filter]");
    if (!selected || selected.getAttribute("aria-pressed") === "true") return;

    const category = selected.dataset.filter;
    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(button === selected));
    }

    let shown = 0;
    for (const project of projects) {
      const matches = category === "all" || project.dataset.category.split(/\s+/).includes(category);
      project.hidden = !matches;
      if (matches) shown += 1;
    }

    status.textContent = `${shown} ${shown === 1 ? "project" : "projects"} shown.`;
  });

  filters.hidden = false;
}
