async function loadData() {
  const response = await fetch("data.json");
  const data = await response.json();

  renderSection("news", data.news, item => `
    <h3>${item.title}</h3>
    <p>${item.content}</p>
  `);

  renderSection("restaurants", data.restaurants, item => `<li>${item.name}</li>`);
  renderSection("nightlife", data.nightlife, item => `<li>${item.name}</li>`);
  renderSection("rentals", data.rentals, item => `<li>${item.name}</li>`);
  renderSection("arts_culture", data.arts_culture, item => `<li>${item.name}</li>`);
}

function renderSection(sectionId, items, templateFn) {
  const container = document.getElementById(sectionId);
  if (!container) return;
  container.innerHTML = items.map(templateFn).join("");
}

loadData();
