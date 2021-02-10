const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value.length) {
      this.classList.replace("is-error", "is-valid") ||
        this.classList.add("is-valid");
      this.nextElementSibling?.classList.replace("is-visible", "is-hidden");
    } else {
      this.classList.replace("is-valid", "is-error") ||
        this.classList.add("is-error");

      this.nextElementSibling?.classList.replace("is-hidden", "is-visible");
    }

    input.addEventListener("focus", function handleFocus() {
      this.classList.remove("is-error", "is-valid");
    });
  });
});
