import main from './main.css';
import hello from './hello';

function component() {
  let res = hello('Hello Bros!');
  document.body.appendChild(res);
}

component();

if (module.hot) {
  console.log('is hot');
  module.hot.accept('./hello.js', function() {
    console.log('Accepting the updated hello module!');

    document.body.removeChild(res);
    res = component();
    document.body.appendChild(res);
  });
}
