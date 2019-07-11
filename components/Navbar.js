'use strict';

function Navbar(parentElement, links, style) { // PARENT ELEMENT?
  this.parentElement = parentElement;
  this.links = links;
  this.style = style;
  this.elements = null;
}

Navbar.prototype.generate = function() {
    // dynamically generate elements
  this.elements = `<nav>
                      <ul>`;
  this.links.forEach(link => {
    this.elements += `
      <li>
        <a href="#0" url=${link.url}>${link.name}</a>
      </li>
    `;
  });
 this.elements += `</ul>
                </nav>
 `;
 this.render();
}

Navbar.prototype.render = function() {
  // add elements to DOM
  this.parentElement.innerHTML = this.elements;
}