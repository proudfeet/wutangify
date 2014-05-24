movieApp = {};

movieApp.apiKey = "12e9e2de03ebd1a7c3cfa3857fde0e3f";


movieApp.searchMovie = function(){
	$.ajax("https:api.themoviedb.org/3/search/movie", {
		type: "GET",
		dataType: "json",
		data: {
			api_key: movieApp.apiKey, 
			query: movieApp.movieTitle,
		},
		success: function(response){
			var id = response.results[0].id;
			movieApp.searchCharacters(id);
		}
	});
};

movieApp.searchCharacters = function(id){
	$.ajax("https:api.themoviedb.org/3/movie/" + id + "/credits", {
		type: "GET",
		dataType: "json",
		data: {
			api_key: movieApp.apiKey, 
		},
		success: function(credits){
			movieApp.displayCharacters(credits);
		}
	});
};

movieApp.displayCharacters = function(credits){
	for (i = 0; i <= 8 && i != credits.cast.length; i++){
			var characters = credits.cast[i].character;
			console.log(characters);
		}
};


movieApp.init = function(){
	movieApp.searchMovie();
};


// JQuery doc ready, with init function called
$(function(){
	

	$('input[type=submit]').on('click',function(){
		movieApp.movieTitle = $('input[type=text]').val();
		movieApp.init();
	});
	
});
