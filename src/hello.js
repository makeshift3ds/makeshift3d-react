export default function(txt = 'default text') {
  const el = document.createElement('h1');

  el.innerHTML = txt + '<div class="nested">Booyah!</div>';

  return el;
}