'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <header>
      <h1>Worthless Wisdom</h1>
      <h2>A simple, utterly useless tool to help you deal with anxiety and depression.</h2>
    </header>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}