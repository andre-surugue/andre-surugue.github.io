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
