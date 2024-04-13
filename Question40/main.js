function make_album(artist_album, album_title, tracks) {
    var album = {
        artist: artist_album,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Abubaker", "Album title 1");
var album2 = make_album("Usman", "Album title 2");
var album3 = make_album("Awais", "Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
