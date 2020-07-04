//
// Variables
//

// Get the #app element
var app = document.querySelector('#app');

// Define a localStorage ID
var storageID = 'pirateCache';


//
// Methods
//

/**
 * Sanitize and encode all HTML in a user-submitted string
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
	*/
var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
	};

/**
	* Render a message into the UI when there are no articles to share
	*/
var renderNoArticles = function () {
	app.innerHTML = '<p>There be no pirate news afoot, matey. Check back later.</p>';
	};

/**
 * Render articles into the UI
	* @param  {Object} data The API response object
	*/
var renderNews = function (data) {

	// If there are no articles, render a message into the UI
	if (data.articles.length < 1) {
		renderNoArticles();
		return;
	}

	// Otherwise, render the UI
	app.innerHTML = data.articles.map(function (article) {
		var html =
			'<article>' +
				'<h2>' + sanitizeHTML(article.title) + '</h2>' +
				'<p><em>By ' + sanitizeHTML(article.author) + ' on ' + sanitizeHTML(article.pubdate) + '</em></p>' +
				sanitizeHTML(article.article) +
			'</article>';
		return html;
	}).join('') + '<p><em>Articles from <a href="' + sanitizeHTML(data.attribution.url) + '">' + sanitizeHTML(data.attribution.name) + '</a></em></p>';

};

/**
 * Check if the data is valid
 * @param  {Object}  saved   The data to validate
 * @param  {Number}  goodFor How long the data is good for
 * @return {Boolean}         If true, data has not yet expired
 */
var isDataValid = function (saved, goodFor) {

	// Check that there's data, and a timestamp key
	if (!saved || !saved.data || !saved.timestamp) return false;

	// Get the difference between the timestamp and current time
	var difference = new Date().getTime() - saved.timestamp;

	return difference < goodFor;

};

/**
 * Save article data to localStorage
 * @param  {Object} data The article data
 */
var saveData = function (data) {

	// Create a cache object with a timestamp
	var cache = {
		data: data,
		timestamp: new Date().getTime()
	};

	// Stringify it and save it to localStorage
	localStorage.setItem(storageID, JSON.stringify(cache));

};

/**
 * Get API data from localStorage
 */
var getData = function () {

	// Get saved data from localStorage
	var saved = localStorage.getItem(storageID);
	if (!saved) return;
	saved = JSON.parse(saved);

	// If data is has not expired, return it
	// Use cached data from 30 seconds
	if (isDataValid(saved, 1000 * 30)) {
		return saved.data;
	}

};

/**
 * Get articles from the cache if still valid, or from the API if not
 */
var fetchArticles = function () {

	// Check for valid cached data
	// If it exists, use it
	var saved = getData();
	if (saved) {
	renderNews(saved);
		console.log('Loaded from cache');
		return;
	}

	// Otherwise, fetch articles from the API
	fetch('https://vanillajsacademy.com/api/pirates.json').then(function (response) {
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject(response);
		}
	}).then(function (data) {
		renderNews(data);
		saveData(data);
		console.log('Fetched from API');
	}).catch(function () {
		renderNoArticles();
	});

};


//
// Inits
//

	fetchArticles();