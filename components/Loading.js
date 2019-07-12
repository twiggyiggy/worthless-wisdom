'use strict';

function Loading(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Loading.prototype.generate = function() {
  this.elements = `<section class="container loading-wrapper">
                    <h3>Loading...</h3>
                  </section>`;
  this.render();
}

Loading.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}