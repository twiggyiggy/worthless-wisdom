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
    <header>
      <h2>Inspiational quotes have been scietifically proven to be completely useless when dealing with depression. Feeling shit but skeptical? Try it yourself!</h2>
    </header>
    <section class="cards-container">
  `;
  this.elements += `
      <article>
        <h3><i>${this.quotes.quoteText}</i></h3>
        <p>${this.quotes.quoteAuthor}</p>
      </article>
      <button>Try again!</button>
    `
  this.elements += '</section>'
  this.render();
}

QuotesPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

QuotesPage.prototype.connectToAPI = async function() {
  this.quotes = await quotesServiceInstance.getAllQuotes();
}