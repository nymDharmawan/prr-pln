angular.module('prr.services', [])

.factory('pelangganApi',function ($http,$q,$ionicLoading,$timeout) {

	function getPelanggan(idPelanggan){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://dev.ninebaliwebdesign.com/prr-pln/index.php/rest/getPelanggan/"+idPelanggan)
			.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
			.error(function(){
				console.log("error");
				deffered.reject();
			});
		return deffered.promise;
	}
	/*function getListingDetail(idListings){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://www.directorylistings.com.au/rest/child_detail.php?id="+idListings)
		.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
		.error(function(){
			console.log("error");
			deffered.reject();
		});
		return deffered.promise;
	}
	function setIdListing(idlisting){
		idListings = idlisting;

	}*/
	
	return{
		all: getPelanggan
 	};
	
})