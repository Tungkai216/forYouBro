let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
let quote = document.querySelector('#quote')




let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Celengan Rindu",
     path: "../msc/cerindu.mp3",
     img: "../img/img1222.jpg",
     singer: "Feby",
     tulis: "Celengan macam apa ini?"
     
   },
   {
     name: "Bicara",
     path: "../msc/bicara.mp3",
     img: "../img/img133.jpg",
     singer: "Feby ft. Arash",
     tulis:"Bicara aja nggak bisa"
     
   },
   {
     name: "Sesuatu di Jogja",
     path: "../msc/sejog.mp3",
     img: "../img/img144.jpg",
     singer: "Mitty Zasia",
     tulis: "Jadi pengen ke Jogja"
     
   },
   {
     name: "Jellysfish",
     path: "../msc/yunomi.mp3",
     img: "../img/img9.jpg",
     singer: "Yunomi ft. Roller Girl",
     tulis: "Awas kesetrum brrr.."
     
   },
   {
     name: "Lemon",
     path: "../msc/lemon.mp3",
     img: "../img/img88.jpg",
     singer: "Kobasolo",
     tulis: "Katanya lemon itu pahit"
     
   },
    {
     name: "Renai decorate",
     path: "../msc/lovedecor.mp3",
     img: "../img/img11.jpg",
     singer: "Nayugorou",
     tulis: "Senam skj, cari aja di yutub"
     
   }


];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  quote.innerHTML = All_song[index_no].tulis;
    
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
  track_image.style.animation = "muter 40s  infinite linear";
 		

  
}





//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	 track_image.style.animation = "";
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }