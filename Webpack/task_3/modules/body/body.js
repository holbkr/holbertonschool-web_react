import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append(`
  <div id="main-content">
    <button id="btn">Click here to get started</button>
    <p id="count"></p>
  </div>
`);

let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#btn').on('click', _.debounce(updateCounter, 500));
