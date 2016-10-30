app_topSongs.directive("showTrackDetails",[function(){
	return {
		templateUrl: 'app/views/show-track-details.html',
		restrict: 'E',
		scope: {
		    trackInfo: '=',
		    fnModifyPlaylist: '&',
		    isPlayList: '@'  
		}
	}
}]);