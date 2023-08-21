let pop_song_left = document.getElementById("pop-song-left");
let pop_song_right = document.getElementById("pop-song-right");
let popularSongs = document.getElementsByClassName("popular-song")[0];

let pop_art_left = document.getElementById("pop-art-left");
let pop_art_right = document.getElementById("pop-art-right");
let popularArtist = document.getElementsByClassName("popular-artists")[0];

let shuffle = document.getElementsByClassName('suffle')[0];

let music = new Audio("audio/1.mp3")
// music.play()

const songs = [
  {
    id : "1",
    songName :  `On My Way <br>
    <div class="artist">Alan Walker</div>`,
    poster : "img/1.jpg"
  },
  {
    id : "2",
    songName :  `Fade <br>
    <div class="artist">Alan Walker</div>`,
    poster : "img/2.jpg"
  },
  {
    id : "3",
    songName :  `Cartoon - On & On <br>
    <div class="artist">Daniel Levi</div>`,
    poster : "img/3.jpg"
  },
  {
    id : "4",
    songName :  `Maan Meri Jaan - Mortals <br>
    <div class="artist">King</div>`,
    poster : "img/4.jpg"
  },
  {
    id : "5",
    songName :  `Ertugrul Gazi <br>
    <div class="artist">Ertugrul</div>`,
    poster : "img/5.jpg"
  },
  {
    id : "6",
    songName :  `Electronic Music <br>
    <div class="artist">Electro</div>`,
    poster : "img/6.jpg"
  },
  {
    id : "7",
    songName :  ` Agar Tum Sath Ho <br>
    <div class="artist">Tamashaa</div>`,
    poster : "img/7.jpg"
  },
  {
    id : "8",
    songName :  `Suna Hai <br>
    <div class="artist">NEha Kakkar</div>`,
    poster : "img/8.jpg"
  },
  {
    id : "9",
    songName :  `Dilbar <br>
    <div class="artist">Satyameva Jayate</div>`,
    poster : "img/9.jpg"
  },
  {
    id : "10",
    songName :  `Duniya <br>
    <div class="artist">Luka Chupi</div>`,
    poster : "img/10.jpg"
  },
  {
    id : "11",
    songName :  `Lagdi Lahore Di <br>
    <div class="artist">Street Dancer</div>`,
    poster : "img/11.jpg"
  },
  {
    id : "12",
    songName :  `Putt Jatt Da <br>
    <div class="artist">Putt Jatt da</div>`,
    poster : "img/12.jpg"
  },
  {
    id : "13",
    songName :  `Baarishein <br>
    <div class="artist">Atif Aslam</div>`,
    poster : "img/13.jpg"
  },
  {
    id : "14",
    songName :  `Vaaste <br>
    <div class="artist">Dhwani Bhanushali</div>`,
    poster : "img/14.jpg"
  },
  {
    id : "15",
    songName :  `Lut Gaye <br>
    <div class="artist">Jubin Nautiyal</div>`,
    poster : "img/15.jpg"
  },
  {
    id : "16",
    songName :  `Tu Meri JIndagi Hai Tu <br>
    <div class="artist">Jubin Nautiyal</div>`,
    poster : "img/16.jpg"
  },
  {
    id : "17",
    songName :  `Batao Yaad Hai Tumko <br>
    <div class="artist">Alan Walker</div>`,
    poster : "img/17.jpg"
  },
  {
    id : "18",
    songName :  `On My Way <br>
    <div class="artist">Alan Walker</div>`,
    poster : "img/18.jpg"
  },
  {
    id : "19",
    songName :  `Munde Pagal <br>
    <div class="artist">AP Dhilion</div>`,
    poster : "img/19.jpg"
  },
  {
    id : "20",
    songName :  `Tumhe jo maine dekha <br>
    <div class="artist">Mai Hun Na</div>`,
    poster : "img/20.jpg"
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

//search box data start
let searchResults = document.getElementsByClassName('search_results')[0];

songs.forEach(element=>{
  const {id, songName , poster} = element;
  
  let cards = document.createElement('a');
  cards.classList.add('cards')
  cards.href = '#' + id
  cards.innerHTML = `
  <img src="${poster}" alt="">
                            <div class="search_content">
                               ${songName}
                            </div>
  `;
  searchResults.appendChild(cards); 
})

let input = document.getElementsByTagName('input')[0]

input.addEventListener('keyup' , ()=>{
  let inputValue = input.value.toUpperCase();
  
  let items = searchResults.getElementsByTagName('a');

  for (let i = 0; i < items.length; i++) {
    let searchTitle = items[i].getElementsByClassName('search_content')[0];
    let searchTitleValue = searchTitle.textContent || searchTitle.innerHTML;
    // console.log(searchTitleValue.toUpperCase().indexOf(inputValue)

    if(searchTitleValue.toUpperCase().indexOf(inputValue)>-1){
      items[i].style.display = 'flex';
    }
    else{
      items[i].style.display = 'none';
    }
    if(input.value == 0){
      searchResults.style.display = 'none'
    }
    else{
      searchResults.style.display = ''

    }
  }
})
//search box data end

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
    music.src =`audio/${index}.mp3`
    console.log(music.src)
    music.play();
    posterPlay.src = `img/${index}.jpg`
    playMusic.classList.add('bi-pause-circle-fill');
    playMusic.classList.remove('bi-play-circle-fill');
    downloadMusic.href = `audio/${index}.mp3`;

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
  music.src =`audio/${index}.mp3`
    console.log(music.src)
    music.play();
    posterPlay.src = `img/${index}.jpg`
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
  music.src =`audio/${index}.mp3`
  console.log(music.src)
  music.play();
  posterPlay.src = `img/${index}.jpg`
  playMusic.classList.add('bi-pause-circle-fill');
  playMusic.classList.remove('bi-play-circle-fill');
  downloadMusic.href = `audio/${index}.mp3`;

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
  music.src =`audio/${index}.mp3`
  console.log(music.src)
  music.play();
  posterPlay.src = `img/${index}.jpg`
  playMusic.classList.add('bi-pause-circle-fill');
  playMusic.classList.remove('bi-play-circle-fill');
  downloadMusic.href = `audio/${index}.mp3`;

  let songTitle = songs.filter(element => element.id == index);

  songTitle.forEach((ele)=>{
    let {songName} = ele ;
    title.innerHTML = songName;
    downloadMusic.setAttribute('download' , songName);
  })
}

const repeatMusic = ()=>{
  index ;
  music.src =`audio/${index}.mp3`
  console.log(music.src)
  music.play();
  posterPlay.src = `img/${index}.jpg`
  playMusic.classList.add('bi-pause-circle-fill');
  playMusic.classList.remove('bi-play-circle-fill');
  downloadMusic.href = `audio/${index}.mp3`;

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

//media.css
let menuListButton = document.getElementById('menuListButton');
let menuBox = document.getElementsByClassName('menu_box')[0];

menuListButton.addEventListener('click', ()=>{
  if(menuBox.style.transform == 'unset'){
    menuBox.style.transform = "translate(-100%)"
  }
  else{
    menuBox.style.transform = 'unset';
  }

})

// let songBox = document.getElementsByClassName('song_box')[0];

// songBox.addEventListener("click",()=>{
 
//    menuListButton.style.opacity = 1;
// })

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

let profileImg = document.getElementById('profileImg');
profileImg.addEventListener('click',()=>{
  
})