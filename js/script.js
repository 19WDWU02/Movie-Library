var movies = [
    {
        id: 1,
        title: 'Avengers Infinity War',
        year: 2018,
        directors: ['Anthony Russo', 'Joe Russo'],
        bio: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        length: 149,
        poster: 'infinityWar.jpg'
    },
    {
        id: 2,
        title: 'Jurassic World',
        year: 2015,
        directors: ['Colin Trevorrow'],
        bio: 'A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.',
        length: 124,
        poster: 'jurassicWorld.jpg'
    },
    {
        id: 3,
        title: 'Incredibles 2',
        year: 2018,
        directors: ['Brad Bird'],
        bio: 'The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.',
        length: 118,
        poster: 'incredibles2.jpg'
    },
    {
        id: 4,
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
        directors: ['George Lucas'],
        bio: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
        length: 121,
        poster: 'aNewHope.jpg'
    },
    {
        id: 5,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        directors: ['Peter Jackson'],
        bio: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        length: 178,
        poster: 'lotr.jpg'
    }
];
console.log(movies);
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
    // var movieCard = '<div class="col-12 col-sm-6 col-md-4">';
    //     movieCard += '<div class="card">';
    //         movieCard += '<div class="card-body">';
    //             movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
    //         movieCard += '</div>';
    //     movieCard += '</div>';
    // movieCard += '</div>';
    //
    // console.log(movieCard);
    // moviesList.innerHTML += movieCard;

    // // Way #3
    var columns = document.createElement('div');
    var columnsAttr = document.createAttribute('class');
    columnsAttr.value = 'col-12 col-sm-6 col-md-4';
    columns.setAttributeNode(columnsAttr);

    var card = document.createElement('div');
    var cardAttr = document.createAttribute('class');
    cardAttr.value = 'card';
    card.setAttributeNode(cardAttr);


    var cardBody = document.createElement('div');
    var cardBodyAttr = document.createAttribute('class');
    cardBodyAttr.value = 'card-body';
    cardBody.setAttributeNode(cardBodyAttr);

    var cardTitle = document.createElement('h5');
    var cardTitleAttr = document.createAttribute('class');
    cardTitleAttr.value = 'card-title';
    cardTitle.setAttributeNode(cardTitleAttr);
    var cardTitleText = document.createTextNode(movie.title);

    cardTitle.appendChild(cardTitleText);
    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);
    columns.appendChild(card);


    moviesList.appendChild(columns);





















}
