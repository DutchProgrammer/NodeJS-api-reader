var apiReader = new function() {
	
	var settings    = {};
	var lastRequest = false;
	var ctx         = this;

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

		var response = $.extend($.ajax(settings), ctx);

		return (lastRequest = response);
	};

	this.getResponse = function() {

		var response = {'status' : 'error', 'message' : 'couldnt received data', 'data' : {}};
		if (lastRequest) {


		  if (lastRequest.readyState == 200) {
		  	return {'status' : 'ok', 'messsage' : 'received data', 'data' : response.statusText}
		  } else {
		  	response['data'] = 'ajax error: '+lastRequest.statusText;

		  	return response;
		  }
		}

		return response;
	};

	this.setSettings = function setSettings(customSettings) {
		settings = $.extend(settings, customSettings);

		return this;
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

};
