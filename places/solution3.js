//
		// Variables
		//

		var favesID = 'exploreFaves';
		var visitedID = 'exploreVisited';


		//
		// Methods
		//

		/**
		 * Get items from localStorage
		 * @param {String} id The localStorage ID
		 * @return {Object}   The items from storage
		 */
		var getFromStorage = function (id) {
			var saved = localStorage.getItem(id);
			var savedObj = saved ? JSON.parse(saved) : {};
			return savedObj;
		};

		/**
		 * Save items to localStorage
		 * @param  {Object} items Items to save
		 * @param {String}  id    The localStorage ID
		 */
		var saveToStorage = function (items, id) {
			localStorage.setItem(id, JSON.stringify(items));
		};

		/**
		 * Get place data from the API and update the app state
		 */
		var getPlaces = function () {
			fetch('https://vanillajsacademy.com/api/places.json').then(function (response) {
				if (response.ok) {
					return response.json();
				}
				return Promise.reject(response);
			}).then(function (data) {
				app.data.faves = getFromStorage(favesID);
				app.data.visited = getFromStorage(visitedID);
				app.data.filter = 'all';
				app.data.places = data;
			}).catch(function (err) {
				console.warn(err);
				app.data.places = null;
			});
		};

		/**
		 * Determine if a place should be visible or not based on filters
		 * @param  {Object} place The place
		 * @param  {Object} props The current app state
		 * @return {String}       The hidden string
		 */
		var getHidden = function (place, props) {

			// If filter is "not visited" and place has been visited, hide
			if (props.filter === 'not-visited' && props.visited[place.id]) return 'hidden';

			// If filter is "faves" or "visited" and place has not been favorited or visited, hide
			if (props[props.filter] && !props[props.filter][place.id]) return 'hidden';

			// Otherwise, show it
			return '';

		};

		/**
		 * Create HTML for each of the places from the app data
		 * @param  {Object} props The app data
		 * @return {String}       The HTML
		 */
		var getPlacesHTML = function (props) {
			return props.places.map(function (place) {
				var html =
					'<div class="place" ' + getHidden(place, props) + '>' +
						'<div>' +
							'<img alt="" src="' + place.img + '">' +
						'</div>' +
						'<div>' +
							'<h2>' + place.place + '</h2>' +
							'<p>' + place.description + '</p>' +
							'<p><em>' + place.location + '</em><br><a href="' + place.url + '">' + place.url + '</a></p>' +
							'<p>' +
								'<button data-type="faves" data-id="' + place.id + '" aria-label="Save ' + place.place + '" aria-pressed="' + props.faves[place.id] + '">♥</button>' +
								'<button data-type="visited" data-id="' + place.id + '" aria-label="Visited ' + place.place + '" aria-pressed="' + props.visited[place.id] + '">✓</button>' +
							'</p>' +
						'</div>' +
					'</div>';
				return html;
			}).join('');
		};

		/**
		 * Get the message to display if there's no place data
		 * @return {String} The HTML
		 */
		var getNoPlacesHTML = function () {
			return '<p><em>Unable to find any places right now. Please try again later. Sorry!</em></p>';
		};

		/**
		 * The app component
		 */
		var app = new Reef('#app', {
			data: {},
			template: function (props) {

				// If there are places, render them
				if (props.places && props.places.length) {
					return getPlacesHTML(props);
				}

				// Otherwise, show an error
				return getNoPlacesHTML();

			}
		});

		/**
		 * Handle click events
		 * @param  {Event} event The event object
		 */
		var clickHandler = function (event) {

			// Get button details
			var type = event.target.getAttribute('data-type');
			var id = event.target.getAttribute('data-id');

			// Only run on fave or visited buttons
			if (!type || !id) return;

			// If place is already set, remove it
			// Otherwise, set it
			app.data[type][id] = app.data[type][id] ? false : true;

		};

		/**
		 * Handle change events
		 * @param  {Event} event The event object
		 */
		var changeHandler = function (event) {

			// Only run on .filters inputs
			if (!event.target.closest('.filters')) return;

			// Reactively update filter view
			app.data.filter = event.target.value;

		};

		/**
		 * Handle render events
		 * @param  {Event} event The event object
		 */
		var renderHandler = function (event) {

			// Save favorites and visited places to localStorage on render
			saveToStorage(app.data.faves, favesID);
			saveToStorage(app.data.visited, visitedID);

		};


		//
		// Inits
		//

		getPlaces();
		document.addEventListener('click', clickHandler);
		document.addEventListener('change', changeHandler);
		document.addEventListener('render', renderHandler);