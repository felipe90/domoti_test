
class Controller {

    constructor( ItemServices, $mdDialog , config, $http,  $location) {
		this.$http = $http;
    	this.config = config;
    	this.mdDialog = $mdDialog;
    	this.ItemServices = ItemServices;
    	this.location = $location;

        this.itemId = ItemServices.getItemdDetail();

    	this.RequestDetail(); //init requesting data from API 
    }

    RequestDetail() {

		//validate id
		if( this.itemId !== 'undefined'){
			
			this.item = {};

			var apiUrl = this.config.baseApiUrl+ 'i=' + this.itemId + '&plot=full&page=1';
			console.log(apiUrl);
			this.$http.get( apiUrl )
				.success( (data) => {
					console.log(data);	
					this.item = data;
				})
				.error( (data) => {
					console.log(data);	
				})
		}
	}   

	GoBack() {
        this.location.path('/');
    }

}

Controller.$inject = [ 'ItemServices' , '$mdDialog' ,'config', '$http' , '$location'];

export default Controller;