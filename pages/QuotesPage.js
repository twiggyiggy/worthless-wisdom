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
    <section class="container">
      <h3>Inspirational quotes have been scietifically proven to be completely useless when dealing with depression. Skeptical? Try it yourself.</h3>
    </section>
    <section class="card-container">
  `;
  this.elements += `
      <article>
        <h3><i>${this.quotes.quote}</i></h3>
        <h3 class="author"><i>~Kanye West</i></h3>
      </article>
    `;
  this.elements += `
            <button class="btn-new-quote"></button>
          </section>
  `
  this.render();
}

QuotesPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

QuotesPage.prototype.connectToAPI = async function() {
  this.quotes = await quotesServiceInstance.getAllQuotes();
}
