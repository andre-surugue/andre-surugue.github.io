async function loadJobs() {
  const response = await fetch("jobs.csv");
  const data = await response.text();
  const rows = data.split("\n").slice(1);
  
  let table = "<table><tr><th>Entreprise</th><th>Poste</th><th>Statut</th></tr>";
  rows.forEach(row => {
    if (row.trim() !== "") {
      const cols = row.split(",");
      table += `<tr><td>${cols[0]}</td><td>${cols[1]}</td><td>${cols[2]}</td></tr>`;
    }
  });
  table += "</table>";
  
  document.getElementById("jobs-table").innerHTML = table;
}

loadJobs();

// Popup photo
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const images = document.querySelectorAll(".popup-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "block";
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Fermer popup si clic à l'extérieur de l'image
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
