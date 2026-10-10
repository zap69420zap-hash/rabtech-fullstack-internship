const addButton = document.querySelector("#add-project");
const rows = document.querySelector("#project-rows");
const announcement = document.querySelector("#project-announcement");
if (addButton && rows && announcement) {
  addButton.addEventListener("click", () => {
    if (document.querySelector("#demo-project-row")) {
      announcement.textContent = "The demo project has already been added.";
      return;
    }
    const row = document.createElement("tr");
    row.id = "demo-project-row";
    row.innerHTML = '<th scope="row">Internship demo project</th><td>Student team</td><td><span class="status status-progress">In progress</span></td><td>Just now</td>';
    rows.append(row);
    announcement.textContent = "Demo project added to the table.";
  });
}
const contrastButton = document.querySelector("#contrast-toggle");
if (contrastButton) {
  contrastButton.addEventListener("click", () => {
    const enabled = document.body.classList.toggle("high-contrast");
    contrastButton.setAttribute("aria-pressed", String(enabled));
    contrastButton.textContent = enabled ? "Standard contrast" : "High contrast";
  });
}
