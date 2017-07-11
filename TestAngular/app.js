var app = angular.module("myApp", ["ngTable"]);


app.controller("demoController", ['NgTableParams','$http', function(NgTableParams,$http){

		// tip: to debug, open chrome dev tools and uncomment the following line 
		//debugger;

		var scope = this;
		this.mainInfo = [];
		
		

		$http.get("https://api.myjson.com/bins/8ejjv")
		    .then(function(response) {
		        scope.mainInfo = response.data;
		        console.log(scope.mainInfo[0].color);
		        // scope.tableParams.reload();

		        scope.tableParams = new NgTableParams({
					page: 1,
					count: 5
				}, {
			     	dataset: scope.mainInfo
		    	});

		    });
		
    	

}]);
