import peliculas from './peliculas.js'

const accion = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const aventura = document.getElementById('genero-12');

const pelisaccion = peliculas.filter (element => element.genre_ids.includes (28));
const pelisthriller = peliculas.filter (element => element.genre_ids.includes (53));
const pelisaventura = peliculas.filter (element => element.genre_ids.includes (12));

const listaaccion = document.getElementById ('listaaccion');
if (pelisaccion.length > 0) {
    pelisaccion.forEach (peliculas => {listaaccion.innerHTML += `<li><img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="${peliculas.title}"><p>${peliculas.title}</p></li>`;}    
    );

}

const listathriller = document.getElementById ('listathriller');
if (pelisthriller.length > 0) {
    pelisthriller.forEach (peliculas => {listathriller.innerHTML += `<li><img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="${peliculas.title}"><p>${peliculas.title}</p></li>`;}    
    );

}

const listaaventura = document.getElementById ('listaaventura');
if (pelisaventura.length > 0) {
    pelisaventura.forEach (peliculas => {listaaventura.innerHTML += `<li><img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="${peliculas.title}"><p>${peliculas.title}</p></li>`;}    
    );

}

console.log (pelisaccion);
console.log (pelisthriller);
console.log (pelisaventura);
console.log (listaaccion);
