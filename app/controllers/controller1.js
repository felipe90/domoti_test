
class Controller {

    constructor( ItemServices, $mdDialog , config, $http,  $location) {
		this.$http = $http;
    	this.config = config;
    	this.mdDialog = $mdDialog;
    	this.ItemServices = ItemServices;
    	this.location = $location;
    }


    hello(a){
    	console.log(a);
    }

	SearchByTitle() {

		//validate title
		if( this.searchTitle !== 'undefined'){
			
			this.movieItems = {};

			var filterTitle = this.searchTitle.replace( /\s/g, "")

			var apiUrl = this.config.baseApiUrl+ 's=' + filterTitle + '&page=1';
			console.log(apiUrl);
			this.$http.get( apiUrl )
				.success( (data) => {
					console.log(data);	
					this.movieItems = data.Search;
				})
				.error( (data) => {
					console.log(data);	
				})
		}
	}    


    ShowDetail ( itemId ) {

        console.log(itemId);
        this.ItemServices.setItemDetail( itemId );
        this.location.path('page2');
    }
}

Controller.$inject = [ 'ItemServices' , '$mdDialog' ,'config', '$http' , '$location'];

export default Controller;