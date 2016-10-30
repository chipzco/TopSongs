app_topSongs.controller('indexController', ['$scope', 'Spotify','$log', 'playlistService',function ($scope, Spotify,$log,playlistService) {
	
	$scope.myPlayList=playlistService.getPlaylist();
	
	/*  ************ Artist Tab  ********* */
	$scope.searchArtist = function () {
		Spotify.search($scope.searchartist, 'artist').then(function (data) {
			$scope.artistAlbumMode=1;
			$scope.artists = data.artists.items;
		});
	};
	$scope.getArtistAlbums=function(artist) {
		Spotify.getArtistAlbums(artist).then(function(data) {
			$scope.artistAlbumMode=2;
			$scope.artistAlbums=data.items;
		});
	}
	$scope.getArtistAlbumTracks=function(album) {
		Spotify.getAlbumTracks(album).then(function(data) {
			$scope.artistAlbumMode=3;
			$scope.artistAlbumTracks=data.items;
		});
	}
	$scope.artistAlbumMode=1;
	$scope.isSetArtistAlbumMode=function(mode) {
		 return $scope.artistAlbumMode=== mode; 		
	}
	$scope.setArtistAlbumMode=function(newmode) {
		$scope.artistAlbumMode=newmode;		
	}
	
	
	/*  ************ Album Tab  ********* */
	
	$scope.searchAlbum=function() {
		Spotify.search($scope.searchalbum, 'album').then(function (data) {
			$scope.showAlbumList=true;
			$scope.albums = data.albums.items;
		});
	}	
	$scope.showAlbumList=false;	
	$scope.getAlbumTracks=function(album) {
		Spotify.getAlbumTracks(album).then(function(data) {
			$scope.showAlbumList=false;
			$scope.albumTracks=data.items;
		});
	}
	
	$scope.searchTrack=function() {
		if ($scope.searchtrack && $scope.searchtrack.length) {
			Spotify.search($scope.searchtrack, 'track').then(function (data) {			
				$scope.tracks = data.tracks.items;
			});
		}
	}
	
	
	
	
	
	
	/*  *********************  PlayList ******************* */
	
	$scope.addToPlayList=function(track) {
		if (track)
			playlistService.addToPlaylist(track);		
		$log.log("added");
	}
	$scope.removeFromPlayList=playlistService.removeFromPlayList;
		
	
	
	
	/*  ***    Tabs   ****    */
	 $scope.tab = 1;
	 $scope.setTab = function(newTab){
		 $scope.tab = newTab;
	 };

	 $scope.isSet = function(tabNum){
		 return $scope.tab === tabNum;
	 };
}]);