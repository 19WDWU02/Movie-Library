var movies = [
    {
        id: 1,
        title: 'Avengers Infinity War',
        year: 2018,
        directors: ['Anthony Russo', 'Joe Russo'],
        bio: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        movieLength: 149,
        poster: 'infinityWar.jpg',
        genre: ['action', 'adventure', 'sci-fi']
    },
    {
        id: 2,
        title: 'Jurassic World',
        year: 2015,
        directors: ['Colin Trevorrow'],
        bio: 'A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.',
        movieLength: 124,
        poster: 'jurassicWorld.jpg',
        genre: ['action', 'adventure', 'sci-fi']
    },
    {
        id: 3,
        title: 'Incredibles 2',
        year: 2018,
        directors: ['Brad Bird'],
        bio: 'The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.',
        movieLength: 118,
        poster: 'incredibles2.jpg',
        genre:  ['animation', 'action', 'adventure']
    },
    {
        id: 4,
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
        directors: ['George Lucas'],
        bio: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
        movieLength: 121,
        poster: 'aNewHope.jpg',
        genre: ['action', 'adventure', 'fantasy']
    },
    {
        id: 5,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        directors: ['Peter Jackson'],
        bio: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        movieLength: 178,
        poster: 'lotr.jpg',
        genre: ['adventure', 'drama', 'fantasy']
    },
    {
        id: 6,
        title: 'Pokémon Detective Pikachu',
        year: 2019,
        directors: ['Rob Letterman'],
        bio: 'In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.',
        movieLength: 104,
        poster: 'pokemon.jpg',
        genre: ['action', 'adventure', 'comedy', 'family', 'mystery', 'sci-fi']
    },
    {
        id: 7,
        title: 'Captain Marvel',
        year: 2019,
        directors: ['Rob Letterman'],
        bio: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
        movieLength: 123,
        poster: 'captainMarvel.jpg',
        genre: ['action', 'adventure', 'sci-fi']
    },
    {
        id: 8,
        title: 'Iron Man',
        year: 2008,
        directors: ['Jon Favreau'],
        bio: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        movieLength: 126,
        poster: 'ironMan.jpg',
        genre: ['action', 'adventure', 'sci-fi']
    },
    {
        id: 9,
        title: 'Spider-Man: Into the Spider-Verse',
        year: 2018,
        directors: ['Bob Persichetti', 'Peter Ramsey', 'Rodney Rothman'],
        bio: 'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.',
        movieLength: 117,
        poster: 'spiderverse.jpg',
        genre: ['animation','action', 'adventure']
    },
    {
        id: 10,
        title: 'Toy Story',
        year: 1995,
        directors: ['John Lasseter'],
        bio: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.',
        movieLength: 81,
        poster: 'toyStory.jpg',
        genre: ['animation', 'comedy', 'adventure']
    },
    {
        id: 11,
        title: 'Batman Begins',
        year: 2005,
        directors: ['Christopher Nolan'],
        bio: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
        movieLength: 140,
        poster: 'batmanBegins.jpg',
        genre: ['action', 'adventure']
    },
    {
        id: 12,
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
        directors: ['Irvin Kershner'],
        bio: 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.',
        movieLength: 144,
        poster: 'empireStrikesBack.jpg',
        genre: ['action', 'adventure', 'fantasy']
    }
];

var moviesList = document.getElementById('moviesList');

for (var i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
    var movie = movies[i];

    // console.log(movie.title);
    // document.getElementById('moviesList').innerHTML += '<p>'+movie.title+'</p>';

    // // Way #1
    // moviesList.innerHTML += '<div class="col-12 col-sm-6 col-md-4">';
    //     moviesList.innerHTML += '<div class="card">';
    //
    //     moviesList.innerHTML += '</div>';
    // moviesList.innerHTML += '</div>';

    // // Way #2
    var genreClass = getGenreColour(movie.genre[0]);
    // console.log(movie.genre[0])

    // if(movie.genre[0] === 'action'){
    //     genreClass = 'border-primary';
    // } else if(movie.genre[0] === 'animation'){
    //     genreClass = 'border-success';
    // } else if(movie.genre[0] === 'adventure'){
    //     genreClass = 'border-danger';
    // } else {
    //     genreClass = 'border-dark';
    // }

    var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
        // movieCard += '<div class="movieThumb card h-100 border-'+genreClass+' " onclick="showMoreMovie('+movie.id+');" >';
        movieCard += '<div class="movieThumb movieThumb2 card h-100 border-'+genreClass+' " data-id="'+movie.id+'">';
            movieCard += '<img src="images/posters/'+movie.poster+'" class="card-img-top" alt="">';
            movieCard += '<div class="card-body">';
                movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
            movieCard += '</div>';
        movieCard += '</div>';
    movieCard += '</div>';

    // console.log(movieCard);
    moviesList.innerHTML += movieCard;

    // // // Way #3
    // var columns = document.createElement('div');
    // var columnsAttr = document.createAttribute('class');
    // columnsAttr.value = 'col-12 col-sm-6 col-md-4';
    // columns.setAttributeNode(columnsAttr);
    //
    // var card = document.createElement('div');
    // var cardAttr = document.createAttribute('class');
    // cardAttr.value = 'card';
    // card.setAttributeNode(cardAttr);
    //
    // var cardBody = document.createElement('div');
    // var cardBodyAttr = document.createAttribute('class');
    // cardBodyAttr.value = 'card-body';
    // cardBody.setAttributeNode(cardBodyAttr);
    //
    // var cardTitle = document.createElement('h5');
    // var cardTitleAttr = document.createAttribute('class');
    // cardTitleAttr.value = 'card-title';
    // cardTitle.setAttributeNode(cardTitleAttr);
    //
    // var cardTitleText = document.createTextNode(movie.title);
    //
    // cardTitle.appendChild(cardTitleText);
    // cardBody.appendChild(cardTitle);
    // card.appendChild(cardBody);
    // columns.appendChild(card);
    //
    // moviesList.appendChild(columns);
}

function showMoreMovie(movieNumber){
    var singleMovie;
    for (var i = 0; i < movies.length; i++) {

        if(movies[i].id === movieNumber){
            singleMovie = movies[i];
            break;
        }

    }
    document.getElementById('posterImage').src = 'images/posters/'+singleMovie.poster;
    document.getElementById('movieTitle').innerText = singleMovie.title;
    document.getElementById('movieYear').innerText = singleMovie.year;

    document.getElementById('movieDirectors').innerHTML = '';
    for (var i = 0; i < singleMovie.directors.length; i++) {
        document.getElementById('movieDirectors').innerHTML += '<li class="list-inline-item">'+singleMovie.directors[i]+'</li>';
    }

    document.getElementById('movieBio').innerText = singleMovie.bio;
    document.getElementById('movieLength').innerText = singleMovie.movieLength;

    document.getElementById('movieGenre').innerHTML = '';

    for (var i = 0; i < singleMovie.genre.length; i++) {
        var genreColour = getGenreColour(singleMovie.genre[i]);
        document.getElementById('movieGenre').innerHTML += '<span class="badge badge-'+genreColour+' mr-1">'+singleMovie.genre[i]+'</span>';
    }

    document.getElementById('moviePopUp').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

var movieThumbnails = document.getElementsByClassName('movieThumb2');
for (var i = 0; i < movieThumbnails.length; i++) {
    // console.log(movieThumbnails[i]);
    // console.log(movieThumbnails[i].dataset.id);

    // movieThumbnails[i].onclick = showMoreMovie;

    movieThumbnails[i].onclick = function(){
        var id = parseInt(this.dataset.id);
        showMoreMovie(id);
    };

    // movieThumbnails[i].onclick = function(){
    //     document.getElementById('moviePopUp').style.display = 'flex';
    //     document.body.style.overflow = 'hidden';
    // };
}

document.getElementById('close').onclick = function(){
    document.getElementById('moviePopUp').style.display = 'none';
    document.body.style.overflow = 'scroll';
}

function getGenreColour(genre){
    if(genre === 'action'){
        return 'primary';
    } else if(genre === 'animation'){
        return 'success';
    } else if(genre === 'adventure'){
        return 'info';
    } else if(genre === 'sci-fi'){
        return 'warning';
    } else if(genre === 'fantasy'){
        return 'danger';
    } else if(genre === 'drama'){
        return 'secondary';
    } else if(genre === 'comedy'){
        return 'light';
    } else {
        return 'dark';
    }
}
