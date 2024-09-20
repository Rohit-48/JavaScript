
// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "MI Amor",
	artist: "Broke For Free",
	image: "https://www.bing.com/images/search?view=detailV2&ccid=tPwFN0A3&id=C5A226EB58C25F56C936C10BBFF02E60E9C33FEF&thid=OIP.tPwFN0A3yyST4nCnN2Zy-QHaE8&mediaurl=https%3a%2f%2fwww.thespruce.com%2fthmb%2fotgP0XgxzKEdQGoujEolfo-41gQ%3d%2f2121x1414%2ffilters%3ano_upscale()%3amax_bytes(150000)%3astrip_icc()%2fGettyImages-677847736-591d09745f9b58f4c06d73a3.jpg&exph=1414&expw=2121&q=flowers&simid=608003521257167818&FORM=IRPRST&ck=B9FFDC2EE2CFBA5A397FCF4F1EF7E1D0&selectedIndex=3&itb=0",
	path: "C:/Users/rohit_1jco9s4/Music"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "Image URL",
	path: "Enthusiast.mp3"
},
{
	name: "Shipping Lanes",
	artist: "Chad Crouch",
	image: "Image URL",
	path: "Shipping_Lanes.mp3",
},
];
