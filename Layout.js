'use strict';

function Layout(root, style) {
  this.root = root;
  this.style = style;
  this.elements = null;
  this.header = null;
  this.main = null;
  this.footer = null;
}

Layout.prototype.generate = function() {
   // generate DOM elements
  this.elements = `
    <header id="site-header"></header>
    <main id="site-main"></main>
    <footer id="site-footer"></footer>
  `;
  this.render();
  this.getContainers();
}

Layout.prototype.render = function() {
 // add elements to DOM 
  this.root.innerHTML = this.elements;  
}

Layout.prototype.getContainers = function() {
  // select elements in the DOM
  this.header = document.querySelector('#site-header');
  this.main = document.querySelector('#site-main');
  this.footer = document.querySelector('#site-footer');

}