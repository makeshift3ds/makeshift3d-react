import img1 from '../logo.png';
import img2 from '../maserati.jpg';

export default function (txt = 'default text') {
  const el = document.createElement('div');

  el.innerHTML = `
    <h1>${txt}</h1>
    <div class="nested">Nested Element</div>
    <div class="img1">now?</div>
    <div class="img2"></div>
    <img src="${img1}" />
    <img src="${img2}" />
  `;
  return el;
}
