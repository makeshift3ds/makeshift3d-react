import './main.css';
import hello from './hello';

function component() {
  const res = hello('Hello Bros!');
  document.body.appendChild(res);
}

component();
