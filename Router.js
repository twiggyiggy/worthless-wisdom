'use strict';

function Router() {
  this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {  // QUE ES EL PARENT ELEMENT?
  if(url === '/') {
    this.generateLandingPage(parentElement);
  } else if(url === '/quotes') {
    this.generateQuotesPage(parentElement);
  }
}

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();   // PORQUE?
}

Router.prototype.generateQuotesPage = function(parentElement) {
  this.page = new QuotesPage(parentElement);
  this.page.generate();   // PORQUE?
}

var routerInstance = new Router();