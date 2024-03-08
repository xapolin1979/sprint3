
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((direc) => direc.director);
  console.log('EXERCICE 1 ->', result);
  return result;
 
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  
  return array.filter(pelicula => pelicula.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
 
  let resul=array.reduce((acumulador,valor)=>{
    if(valor.director===director){
     acumulador.suma+=valor.score
     acumulador.contador++
    }
    return acumulador;
  },{suma:0,contador:0})

  let resultado = resul.suma / resul.contador;
  return parseFloat(resultado.toFixed(2));
}


// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {

  const clonarArray = [...array];

  const ordenarArray = clonarArray.sort((a, b) => a.title.localeCompare(b.title));

  const top20Titulos = ordenarArray.slice(0, 20).map(movie => movie.title);

  return top20Titulos;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const clonarArray = [...array];

  const ordenarPorAño = clonarArray.sort((a, b) => {

    if (a.year !== b.year) {
      return a.year - b.year;
    }

    return a.title.localeCompare(b.title);
  });

  return ordenarPorAño;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
     
 const peliculasDeCategoria = array.filter(pelicula => pelicula.genre.includes(genre));
  if (peliculasDeCategoria.length === 0) {
    return 'No hay películas en la categoría ';
  }

  const sumaPuntuaciones = peliculasDeCategoria.reduce((suma, pelicula) => suma + pelicula.score, 0);
  const media = sumaPuntuaciones / peliculasDeCategoria.length;

  return parseFloat(media).toFixed(2) ; 
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

 const respuesta=array.map(movie => {
  const durationPartes = movie.duration.split(' ');
  let totalMinutos = 0;

  for (let i = 0; i < durationPartes.length; i++) {
    const partes = durationPartes[i];
    
    if (partes.includes('h')) {
      totalMinutos += parseInt(partes) * 60;
    } else if (partes.includes('min')) {
      totalMinutos += parseInt(partes);
    }
  }

  const newMovie = { ...movie };
  newMovie.duration = totalMinutos;
  return newMovie;
  });

  return respuesta;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {

  const respuesta=array.filter(movie=>movie.year===year)


  const bestMovie = respuesta.reduce((best, movie) => {
    return movie.score > (best ? best.score : -Infinity) ? movie : best;
  }, null);

  return [bestMovie];


}

// The following is required to make unit tests work.
// Environment setup. Do not modify the below code. 
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
