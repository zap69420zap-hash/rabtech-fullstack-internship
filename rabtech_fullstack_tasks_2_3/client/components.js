const form = document.querySelector("#project-form");
const nameInput = document.querySelector("#project-name");
const nameError = document.querySelector("#name-error");
const formStatus = document.querySelector("#form-status");
if (form && nameInput && nameError && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = nameInput.value.trim();
    if (value.length < 3) {
      nameError.hidden = false;
      nameError.textContent = "Enter a project name containing at least 3 characters.";
      nameInput.setAttribute("aria-invalid", "true");
      nameInput.focus();
      formStatus.textContent = "";
      return;
    }
    nameError.hidden = true;
    nameError.textContent = "";
    nameInput.removeAttribute("aria-invalid");
    formStatus.textContent = `Form validation passed for "${value}". No information was submitted.`;
  });
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length >= 3) {
      nameError.hidden = true;
      nameInput.removeAttribute("aria-invalid");
    }
  });
}
const dialog = document.querySelector("#confirm-dialog");
const openDialog = document.querySelector("#open-dialog");
const cancelDialog = document.querySelector("#cancel-dialog");
const confirmAction = document.querySelector("#confirm-action");
const dialogStatus = document.querySelector("#dialog-status");
if (dialog && openDialog && cancelDialog && confirmAction) {
  openDialog.addEventListener("click", () => dialog.showModal());
  cancelDialog.addEventListener("click", () => dialog.close("cancel"));
  confirmAction.addEventListener("click", () => dialog.close("confirm"));
  dialog.addEventListener("close", () => {
    if (dialogStatus) dialogStatus.textContent = dialog.returnValue === "confirm" ? "Demo action confirmed. No data was sent." : "Demo action cancelled.";
    openDialog.focus();
  });
}
