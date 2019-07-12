'use strict';

function Footer(parentElement, links, style) {
  this.parentElement = parentElement;
  this.links = links;
  this.style = style;
  this.elements = null;
}

Footer.prototype.generate = function() {
  this.elements = `<ul>
                    <li><a href="https://www.facebook.com" target="blank"><img src="./images/socialmedia-facebook.png"></a></li>
                    <li><a href="https://www.github.com" target="blank"><img src="./images/socialmedia-github.png"></a></li>
                    <li><a href="https://www.instagram.com" target="blank"><img src="./images/socialmedia-insta.png"></a></li>
                  </ul>
  `;
  this.render();
}

Footer.prototype.render = function() {
  // add elements to DOM
  this.parentElement.innerHTML = this.elements;
}

