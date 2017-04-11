var app = app || {};

app.Router = (function() {

	'use strict';

	return Backbone.Router.extend({

		routes: {
			'home': 'home',

			// For un-matched route, default to:
			'*notFound': 'notFound'
		},

		notFound: function() {

			this.navigate('home', { trigger: true });
		},

		home: function() {

			app.mainView.renderView('Home');
		}
	});

})();