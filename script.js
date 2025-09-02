document.getElementById('review-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('review-name').value.trim();
  const category = document.getElementById('review-category').value;
  const text = document.getElementById('review-text').value.trim();

  if (!name || !category || !text) return;

  const reviewHTML = `
    <div class="review">
      <div class="review-header">${name}</div>
      <div class="review-category">${category}</div>
      <div class="review-text">${text}</div>
    </div>
  `;
  document.getElementById('reviews-list').insertAdjacentHTML('afterbegin', reviewHTML);

  document.getElementById('review-form').reset();
});
