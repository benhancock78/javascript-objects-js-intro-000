var playlist = {
  prince: 'corvette'
};

function  updatePlaylist (playlist, artistName, songTitle){
  playlist['artistName'] = 'songTitle';
  return  playlist;
}

function  removeFromPlaylist(artistName, playlist)  {
  delete playlist.artistName;
  return  playlist;
}
