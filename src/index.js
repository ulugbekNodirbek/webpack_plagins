import _ from 'lodash'
import "./scss/main.scss";


function component() {
    const element = document.createElement('div');
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['hello','webpack'], '')
    // element.classList.add('hello')
    const myIcon = new Image();
    myIcon.src = Icon
    return element;

}

document.body.appendChild(component());