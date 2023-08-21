let pop_song_left = document.getElementById("pop-song-left");
let pop_song_right = document.getElementById("pop-song-right");
let popularSongs = document.getElementsByClassName("popular-song")[0];

let pop_art_left = document.getElementById("pop-art-left");
let pop_art_right = document.getElementById("pop-art-right");
let popularArtist = document.getElementsByClassName("popular-artists")[0];

let shuffle = document.getElementsByClassName('suffle')[0];

let music = new Audio("audio/1.mp3")
// music.play()

const songs= [
  {
    id : "1",
    songName :  `Naina Asq Na <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/1.jpg"
  },
  {
    id : "2",
    songName :  `Khairiat <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/2.jpg"
  },
  {
    id : "3",
    songName :  `Desh Mere <br>
    <div class="artist">Arijit SinghLevi</div>`,
    poster : "img/Arijit Singh/3.jpg"
  },
  {
    id : "4",
    songName :  `Dhokha<br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/4.jpg"
  },
  {
    id : "5",
    songName :  `Tera Yaar Hun Main <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/5.jpg"
  },
  {
    id : "6",
    songName :  `Sou Aashmaan <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/6.jpg"
  },
  {
    id : "7",
    songName :  ` Galti Se Mistake <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/7.jpg"
  },
  {
    id : "8",
    songName :  `Hamari Adhuri Kahani <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/8.jpg"
  },
  {
    id : "9",
    songName :  `Traffic <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/9.jpg"
  },
  {
    id : "10",
    songName :  `Villian <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/10.jpg"
  },
  {
    id : "11",
    songName :  `Mere Yaara <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/11.jpg"
  },
  {
    id : "12",
    songName :  `Befikre <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/12.jpg"
  },
  {
    id : "13",
    songName :  `Raazi <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/13.jpg"
  },
  {
    id : "14",
    songName :  `Tamasha<br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/14.jpg"
  },
  {
    id : "15",
    songName :  `Pachtaoge <br>
    <div class="artist">Arijit Singh</div>`,
    poster : "img/Arijit Singh/15.jpg"
  }
 
]

let playMusic = document.getElementById("playmusic");
let wave = document.getElementById("wave");

playMusic.addEventListener('click' , ()=>{
  if(music.paused || music.currentTime <0 ){
    music.play();
    wave.classList.add('active1');
    playMusic.classList.add('bi-pause-circle-fill')
    playMusic.classList.remove('bi-play-circle-fill')
  }
  else{
    music.pause();
    wave.classList.remove('active1');
    playMusic.classList.remove('bi-pause-circle-fill');
    playMusic.classList.add('bi-play-circle-fill');
  }
})


Array.from(document.getElementsByClassName("songItem")).forEach((element,index)=>{
element.getElementsByTagName('img')[0].src = songs[index].poster ;
element.getElementsByTagName('h5')[0].innerHTML = songs[index].songName ;
})


let backgroundGrey = () =>{
  Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
    element.style.background = 'background: rgb(105,105,105,.0)';
  })
}

let backgroundPlay = () =>{
  Array.from(document.getElementsByClassName('playPlayList')).forEach((element)=>{
    element.addEventListener('click' , (el)=>{
      if(el.target.classList[2]== 'bi-play-circle-fill'){
        el.target.classList.remove('bi-play-circle-fill')
        el.target.classList.add('bi-pause-circle-fill')
      }
      else {
        el.target.classList.add('bi-play-circle-fill')
        el.target.classList.remove('bi-pause-circle-fill')
      }
      // element.classList.add('bi-play-circle-fill')
      // element.classList.remove('bi-pause-circle-fill')
      
    })
    
  })
}

let index = 0 ;
let posterPlay = document.getElementById('poster_play');
// console.log(posterPlay)
let title = document.getElementById('title');
let downloadMusic = document.getElementById("downloadsong"); 


Array.from(document.getElementsByClassName('playPlayList')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    index = e.target.id ;
    // console.log(index);
    music.src =`audio/Arijit Singh/${index}.mp3`
    console.log(music.src)
    music.play();
    posterPlay.src = `img/Arijit Singh/${index}.jpg`
    playMusic.classList.add('bi-pause-circle-fill');
    playMusic.classList.remove('bi-play-circle-fill');
    downloadMusic.href = `audio/Arijit Singh/${index}.mp3`;

    let songTitle = songs.filter(element => element.id == index);

    songTitle.forEach((ele)=>{
      let {songName} = ele ;
      title.innerHTML = songName;
      downloadMusic.setAttribute('download' , songName);


      backgroundGrey();
      Array.from(document.getElementsByClassName('songItem'))[index].style.background = "background: rgb(105,105,105,.0)"
backgroundPlay();
// element.target.classList.remove('bi-play-circle-fill');
// element.target.classList.add('bi-pause-circle-fill');

    });
  })
})
 

let timeStart = document.getElementById("timestart");
let timeEnd = document.getElementById("timeEnd");
let Bar1 = document.getElementById('vol');
let Bar = document.getElementById('bar');
let seekBar2 = document.getElementById('seekbar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate' ,()=>{
  let currentMusic = music.currentTime;
  let musicDuration = music.duration;
  // console.log(currentMusic)
  // console.log(musicDuration);

  let firstMinute = Math.floor(musicDuration/60);
  let firstSecond = Math.floor(musicDuration%60);

  // console.log(firstMinute,firstSecond)

  if(firstSecond<10){
    firstSecond = `0${firstSecond}`;
  }

  timeEnd.innerText = `${firstMinute}:${firstSecond}`;
  
  let secondMinute = Math.floor(currentMusic/60);
  let secondSecond = Math.floor(currentMusic%60);

  if(secondSecond<10){
    secondSecond = `0${secondSecond}`;
  }

  timeStart.innerText = `${secondMinute}:${secondSecond}`;

  let progressBar = parseInt((currentMusic/musicDuration)*100);
  volBar.value = progressBar;
  // console.log(volBar.value)
  let seekbar = volBar.value;
  seekBar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});


Bar.addEventListener('change' , ()=>{
  music.currentTime = Bar.value * music.duration/100;
  // console.log(music.currentTime)
})

let volIcon = document.getElementById('vol_down')
let vol = document.getElementById('vol');
let volBar = document.getElementById('volbar');
let volDot = document.getElementById('voldot');

vol.addEventListener('change' , ()=>{
  if(vol.value == 0){
    volIcon.classList.remove('bi-volume-up-fill');
    volIcon.classList.remove('bi-volume-down-fill');
    volIcon.classList.add('bi-volume-off-fill');
  }
  if(vol.value > 0 && vol.value<=50){
    volIcon.classList.remove('bi-volume-up-fill');
    volIcon.classList.add('bi-volume-down-fill');
    volIcon.classList.remove('bi-volume-off-fill');
  }
  if(vol.value > 50){
    volIcon.classList.add('bi-volume-up-fill');
    volIcon.classList.remove('bi-volume-down-fill');
    volIcon.classList.remove('bi-volume-off-fill');
  }
// console.log(vol.value)
let vol_val = vol.value;
volBar.style.width = `${vol_val}%`;
volDot.style.left = `${vol_val}%`;
music.volume = vol_val/100;
})

let prev_button = document.getElementById('previous');
let next_button = document.getElementById('next');


prev_button.addEventListener('click' , ()=>{
  index--;
  if(index<1){
    index = songs.length;
  }
  music.src =`audio/Arijit Singh/${index}.mp3`
    console.log(music.src)
    music.play();
    posterPlay.src = `img/Arijit Singh/${index}.jpg`
    playMusic.classList.add('bi-pause-circle-fill');
    playMusic.classList.remove('bi-play-circle-fill');

    let songTitle = songs.filter(element => element.id == index);

    songTitle.forEach((ele)=>{
      let {songName} = ele ;
      title.innerHTML = songName;
    })
})


next_button.addEventListener('click' , ()=>{
  let shuffleHTML1 = shuffle.innerHTML;

  switch(shuffleHTML1){
    case 'repeat':
      repeatMusic()
      break;
    case 'next':
      nextMusic()
      break;
    case 'random':
      randomMusic()
      break;
  }
})



shuffle.addEventListener('click',()=>{
  let shuffleHTML = shuffle.innerHTML;

  switch(shuffleHTML){
    case "next" : 
        shuffle.classList.add('bi-arrow-repeat')
        shuffle.classList.remove('bi-music-note-beamed')
        shuffle.classList.remove('bi-shuffle')
        shuffle.innerHTML = 'repeat'
        break;
    case "random" : 
        shuffle.classList.remove('bi-arrow-repeat')
        shuffle.classList.add('bi-music-note-beamed')
        shuffle.classList.remove('bi-shuffle')
        shuffle.innerHTML = 'next'
        break;
    case "repeat" : 
        shuffle.classList.remove('bi-arrow-repeat')
        shuffle.classList.remove('bi-music-note-beamed')
        shuffle.classList.add('bi-shuffle')
        shuffle.innerHTML = 'random'
        break;
  }
  
})


const nextMusic = ()=>{
  if(index==songs.length){
    index = 1;
  }
  else{
    index++;
  }
  music.src =`audio/Arijit Singh/${index}.mp3`
  console.log(music.src)
  music.play();
  posterPlay.src = `img/Arijit Singh/${index}.jpg`
  playMusic.classList.add('bi-pause-circle-fill');
  playMusic.classList.remove('bi-play-circle-fill');
  downloadMusic.href = `audio/Arijit Singh/${index}.mp3`;

  let songTitle = songs.filter(element => element.id == index);

  songTitle.forEach((ele)=>{
    let {songName} = ele ;
    title.innerHTML = songName;
    downloadMusic.setAttribute('download' , songName);
  })
}

const randomMusic = ()=>{
  if(index==songs.length){
    index = 1;
  }
  else{
    index = Math.floor(Math.random()*songs.length) + 1;
  }
  music.src =`audio/Arijit Singh/${index}.mp3`
  console.log(music.src)
  music.play();
  posterPlay.src = `img/Arijit Singh/${index}.jpg`
  playMusic.classList.add('bi-pause-circle-fill');
  playMusic.classList.remove('bi-play-circle-fill');
  downloadMusic.href = `audio/Arijit Singh/${index}.mp3`;

  let songTitle = songs.filter(element => element.id == index);

  songTitle.forEach((ele)=>{
    let {songName} = ele ;
    title.innerHTML = songName;
    downloadMusic.setAttribute('download' , songName);
  })
}

const repeatMusic = ()=>{
  index ;
  music.src =`audio/Arijit Singh/${index}.mp3`
  console.log(music.src)
  music.play();
  posterPlay.src = `img/Arijit Singh/${index}.jpg`
  playMusic.classList.add('bi-pause-circle-fill');
  playMusic.classList.remove('bi-play-circle-fill');
  downloadMusic.href = `audio/Arijit Singh/${index}.mp3`;

  let songTitle = songs.filter(element => element.id == index);

  songTitle.forEach((ele)=>{
    let {songName} = ele ;
    title.innerHTML = songName;
    downloadMusic.setAttribute('download' , songName);
  })
}


music.addEventListener('ended',()=>{
  let shuffleHTML1 = shuffle.innerHTML;

  switch(shuffleHTML1){
    case 'repeat':
      repeatMusic()
      break;
    case 'next':
      nextMusic()
      break;
    case 'random':
      randomMusic()
      break;
  }
})

//space button 
document.addEventListener('keydown', (event) => {
  // Check if the space key is pressed (keyCode 32)
  if (event.keyCode === 32) {
    event.preventDefault(); // Prevent default behavior of the space key
    togglePlay(); // Call the togglePlay function to play/pause the music
  }
});

// Function to toggle play/pause of the music
function togglePlay() {
  if (music.paused || music.currentTime < 0) {
    music.play();
    wave.classList.add('active1');
    playMusic.classList.add('bi-pause-circle-fill');
    playMusic.classList.remove('bi-play-circle-fill');
  } else {
    music.pause();
    wave.classList.remove('active1');
    playMusic.classList.remove('bi-pause-circle-fill');
    playMusic.classList.add('bi-play-circle-fill');
  }
}



// let profileImg = document.getElementById('profileImg');
// profileImg.addEventListener('click',()=>{
  
// })