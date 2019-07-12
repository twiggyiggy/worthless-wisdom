'use strict'

function QuotesPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.quotes = null;
  this.loading = null;
}

QuotesPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();

  await this.connectToAPI();
  //console.log(this.quotes);
  this.elements = `
    <section class="container container-quotes">
      <h1 class="slide-in-bottom">Skeptical? You should be.</h1>
      <div class="icon-text-wrapper slide-in-bottom">
        <div class="icon">
          <img src="./images/science-icon-white.png">
        </div>
        <h3>Inspirational quotes have been scietifically proven to be completely useless when dealing with depression and/or anxiety. Try it yourself.</h3>
      </div>
      <section class="card-container slide-in-bottom">
  `;
  this.elements += `
      <article>
        <h3><i>${this.quotes.quote}</i></h3>
        <h3 class="author"><i>~Kanye West</i></h3>
      </article>
    `;
  this.elements += `
          </section>
            <input class="btn-new-quote slide-in-bottom" type="button" value="Get another quote">
        </section>
  `
  this.render();
  this.addListenersToButtons(); // call an event listener to buttons!
}

QuotesPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

QuotesPage.prototype.connectToAPI = async function() {
  this.quotes = await quotesServiceInstance.getAllQuotes();
}

QuotesPage.prototype.addListenersToButtons = function () {
  var buttonNewQuote = document.querySelector('.btn-new-quote');
  var self = this;
  buttonNewQuote.addEventListener('click', (event) => {
    buttonAction(event, self)
  });
}

function buttonAction(event, self) {
  self.generate();
}


{/* //<button class="btn-new-quote">More!</button> */}