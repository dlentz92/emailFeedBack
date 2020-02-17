// WRITE A FUNCTION TO RETRIEVE A BLOB OF JSON
// MAKE AN AJAX REQUEST
// USE THE "FETCH" FUNCTION

function fetchAlbums(){
    fetch("http://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json))
}

// const fetchAlbums = async () => {
//     const res = await fetch("http://rallycoding.herokuapp.com/api/music_albums")
//     const json = await res.json()
    
//     console.log(json)
// }

fetchAlbums();