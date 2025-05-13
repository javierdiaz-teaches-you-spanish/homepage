import _ from 'lodash'; 
import './styles/style-reset.css';
import './styles/style.css';
import './styles/style-large.css';
import './styles/style-medium.css';
import image from './assets/img/small-img.jpg';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const myIcon = new Image();
  myIcon.src = image;

  element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());