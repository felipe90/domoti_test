		
class ItemsServices {

	constructor( $http, config) {
		this.$http = $http;
		this.config = config;
	}

	setItemDetail ( itemId ) {
		this.itemId = itemId;
	}

	getItemdDetail () {
		return this.itemId;
	}

	getItems (title) {

		//validate title
		if(title==='undefined'){
			return;
		}

		var apiUrl = this.config.searchUrl+title;
	
		var promise = this.$http.get(apiUrl)
			.success( (data) => {
				console.log(data);
			 	return data.results; 
			})
			.error( (data) => {
				console.log(data);	
			});
	
		this.dataPromise = promise;
	}

	getItems () {
		return this.dataPromise;
	}

}

ItemsServices.$inject = [ '$http' , 'config'];

export default ItemsServices;