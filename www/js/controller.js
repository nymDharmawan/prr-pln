angular.module('prr.controllers', [])

.controller('geoLocationCtrl', function($scope,$window) {
	$window.navigator.geolocation.getCurrentPosition(function(position){
		$scope.$apply(function(){
			$scope.lat = position.coords.latitude;
			$scope.lng = position.coords.longitude;
		})
		
		console.log(position);
	})
})

.controller('cariPelangganCtrl', function ($scope,pelangganApi) {

	$scope.prr = {};
	var param = function(data) {
		        var returnString = '';
		        for (d in data){
		            if (data.hasOwnProperty(d))
		               returnString += d + '=' + data[d] + '&';
		        }
		        // Remove last ampersand and return
		        return returnString.slice( 0, returnString.length - 1 );
		  };
	$scope.submit = function(prr){

		pelangganApi.all($scope.prr.idpelanggan).then(function(data){
			$scope.pelanggan = data;
			console.log($scope.pelanggan);

		})
	}

	
})

.controller('detailPelanggan', function($scope, $http,$state,$stateParams,$window) {
  
  $scope.prr = {};
  $scope.prr.idpelanggan = $stateParams.idPelanggan;
  $window.navigator.geolocation.getCurrentPosition(function(position){
		$scope.$apply(function(){
			$scope.prr.lat = position.coords.latitude;
			$scope.prr.lng = position.coords.longitude;
		})
	})

  $scope.submit = function(a){
    
    $http.post("http://dev.ninebaliwebdesign.com/prr-pln/index.php/rest/simpan",{
    'id_pelanggan' : $scope.prr.idpelanggan,
    'tanggal_cek': $scope.prr.tanggalcek, 
    'keterangan': $scope.prr.keterangan,
    'latitude': $scope.prr.lat, 
    'longitude': $scope.prr.lng
  },{method  : 'POST',headers : { 'Content-Type': 'application/x-www-form-urlencoded' }})

        .success(function(data, status, headers, config){

           $state.go("home.penjualan");

        })
        .error(function(data, status, headers, config){
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
           
        });
  }
  
})