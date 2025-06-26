document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("fillForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const color = document.getElementById("color").value;

    if (!name || !email || !color) {
      resultDiv.style.display = "block";
      resultDiv.style.background = "#fff4e5";
      resultDiv.style.color = "#c0392b";
      resultDiv.style.border = "1px solid #f8c291";
      resultDiv.textContent = "Please fill in all fields.";
      return;
    }

    resultDiv.style.display = "block";
    resultDiv.style.background = "#eafaf1";
    resultDiv.style.color = "#20734d";
    resultDiv.style.border = "1px solid #b2f0cf";
    resultDiv.innerHTML = `
      Thank you, <b>${name}</b>!<br>
      We've recorded your favorite color as <b style="color:${color}">${color.charAt(0).toUpperCase() + color.slice(1)}</b>.<br>
      We will contact you at <b>${email}</b>.
    `;

    form.reset();
    setTimeout(() => {
      resultDiv.style.display = "none";
    }, 5000);
  });
});