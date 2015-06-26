var apiReader = new function() {

	var settings = {};

	function doRequest(url, method, data, contentType, headers) {
		settings = {
		  url: url,
		  data: data,
		  async: false,
		  method: method,
		  cache: false
		};

		if (headers !== undefined && headers) {
			settings['headers'] = headers;
		}
		if (data !== undefined && data) {
			settings['data'] = data;
		}
		if (contentType !== undefined && contentType) {
			settings['contentType'] = contentType;
		}

		return $.ajax().done(function() {
		  $( this ).addClass( "done" );
		});
	};

	this.setSettings = function setSettings(customSettings) {
		settings = $.jquery(settings, customSettings);

		return true;
	};

	this.get = function get(url, data, contentType, headers) {
		return doRequest(url, 'GET', data, contentType, headers);
	};

	this.post = function post(url, data, contentType, headers) {
		return doRequest(url, 'POST', data, contentType, headers);
	};

	this.put = function put(url, data, contentType, headers) {
		return doRequest(url, 'PUT', data, contentType, headers);
	};

});

