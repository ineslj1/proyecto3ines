import './galleryCard.css';

export const createCard = (
  parentElement,
  { urls: imgSrc, description, alt_description}
) => {
  const card = document.createElement('article');
  card.classList.add('card');
  card.innerHTML = `
<div class="img-container">
  <img src="${imgSrc.small}" alt="${alt_description}" />
</div>
<div class="description">
  <h3>${description ?? ''}</h3>
</div>
`;
  parentElement.append(card);
};
