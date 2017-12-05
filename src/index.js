import main from './main.css';
import hello from './hello';

function component() {
  let res = hello('Hello Bros!');
  document.body.appendChild(res);
}

component();
