'use strict';
// General quotes

function QuotesService() {
  this.baseUrl = 'https://api.kanye.rest'
  this.escapeCors = 'https://cors-anywhere.herokuapp.com/'
}

QuotesService.prototype.getAllQuotes = async function() {
  var response = await fetch(`${this.escapeCors}${this.baseUrl}`);
  var data = await response.json();
  return data;
}

// DO NOT DELETE LINES BELOW
var quotesServiceInstance = new QuotesService();

quotesServiceInstance.getAllQuotes();

/*
function QuotesService() {
  this.baseUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
  this.escapeCors = 'https://cors-anywhere.herokuapp.com/'
}

QuotesService.prototype.getAllQuotes = async function() {
  var response = await fetch(`${this.escapeCors}${this.baseUrl}`);
  var data = await response.json();
  return data;
}
*/





// http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1

/*fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
.then(function(response) {
console.log(response)
	response.json()
	.then(function(data) {
		console.log(data)
	})
})*/

// Design quotes

