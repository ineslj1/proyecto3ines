import './footer.css';
const footerLinks = [
  'Privacy Policy',
  'Privacy Rights',
  'Terms'
];
const toggleFooter = (e) => {
  const footer = document.querySelector('.footer');
  footer.classList.toggle('hidden');
  e.target.classList.toggle('animate');
  setTimeout(() => {
    e.target.classList.toggle('animate');
  }, 200);
};
export const footer = () => {
  const footer = document.createElement('footer');
  const footerToggle = document.createElement('div');
  const footerIcon = document.createElement('img');
  footerIcon.src = '/assets/question-sign.png';
  footerToggle.append(footerIcon);
  const div = document.createElement('div');
  div.classList.add('flex-container', 'footer', 'hidden');
  const ul = document.createElement('ul');
  ul.classList.add('flex-container');
  for (const item of footerLinks) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.target = '_blank';
    a.textContent = item;
    li.append(a);
    ul.append(li);
  }
  const signature = document.createElement('p');
  signature.textContent = 'Created by ';
  const a = document.createElement('a');
  a.rel = 'noopener';
  a.target = '_blank';
  a.textContent = '@ineslj1';
  signature.append(a);
  div.append(ul, document.createElement('hr'), signature);
  footer.append(footerToggle, div);
  footerToggle.addEventListener('click', toggleFooter); 
  return footer;
};
