'use strict';

function QuotesService() {
  this.baseUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
  this.escapeCors = 'https://cors-anywhere.herokuapp.com/'
}

QuotesService.prototype.getAllQuotes = async function() {
  var response = await fetch(`${this.escapeCors}${this.baseUrl}`);
  var data = await response.json();
  return data;
}

var quotesServiceInstance = new QuotesService();

quotesServiceInstance.getAllQuotes();





/*fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
.then(function(response) {
console.log(response)
	response.json()
	.then(function(data) {
		console.log(data)
	})
})*/