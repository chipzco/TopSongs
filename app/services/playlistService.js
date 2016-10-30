app_topSongs.factory("playlistService",['$log',function($log) {	
	var topPlayList={};
	topPlayList.title="My Top 10 List";
	topPlayList.songs=[];
	var convertSongToSimpleModel=function(song) {
		var track={};
		track.name=song.name;
		track.artist=song.artists[0].name;			
		track.track_number=song.track_number;
		track.duration_ms=song.duration_ms;
		track.preview_url=song.preview_url;		
		track.id=song.id;
	    track.note="";
		track.customImage="";
		return track;
	}			
	return {
		getPlaylist: function() {
			return topPlayList;
		},
		addToPlaylist: function(song) {
			$log.warn('in service');
			$log.log(song);
			topPlayList.songs.push(convertSongToSimpleModel(song));			
			$log.log(topPlayList);
		},	
		removeFromPlayList: function(song) {			
			var index = topPlayList.songs.indexOf(song);			
			topPlayList.songs.splice(index,1);     
			$log.warn('deleted entry with index: '  + index);
		},
		convertSongToSimpleModel: convertSongToSimpleModel
	}	
}]); 
	
