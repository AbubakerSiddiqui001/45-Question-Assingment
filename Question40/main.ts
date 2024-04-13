// Define the make_album function
function make_album (artist_album: string, album_title: string, tracks?: number ) {
    let album: {artist: string, title:string, tracks?: number} = {
        artist: artist_album,
        title: album_title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks
    }

    return album
}

    // Calling 3 functions and creating 3 variables with different values
    let album1  = make_album ("Abubaker" , "Album title 1");

    let album2  = make_album ("Usman" , "Album title 2");

    // Calling a make_album function with 3rd parameter
    let album3  = make_album ("Awais" , "Album title 3" , 10);

    console.log(album1);
    console.log(album2);
    console.log(album3);
    
    
    
