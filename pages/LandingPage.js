'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
    <section class="container container-landing">
      <h1 class="landing-titles slide-in-bottom">Worthless<br>Wisdom</h1>
      <h2 class="landing-titles slide-in-bottom">A simple, utterly useless tool to help you deal with anxiety and depression.</h2>
    </section>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}