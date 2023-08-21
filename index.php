<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="media.css">
    <title>SongVilla</title>
</head>
<body>
    <header>
        <div class="menu_box">
            <h6 id="menuListButton"><i class="bi-music-note-list"></i></h6>
            <h1>Playlist</h1>
            <div class="playlist">
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i>Playlist</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i>Last Listening</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i>Recommended</h4>
            </div>
            <div class="menu">
                <li class="songItem">
                    <span>01</span>
                    <img src="Covers/Anaadi.jpg" alt="">
                    <h5>Anaadi <br>
                         <div class="artist">Seedhe Maut</div></h5>
                    <i class="bi playPlayList bi-play-circle-fill"  id="1"></i>
                </li>
                <li class="songItem">
                    <span>02</span>
                    <img src="Covers/Anaadi.jpg" alt="">
                    <h5>Anaadi <br> 
                        <div class="artist">Seedhe Maut</div></h5>
                    <i class="bi playPlayList bi-play-circle-fill"  id="2"></i>
                </li>
                <li class="songItem">
                    <span>03</span>
                    <img src="Covers/Anaadi.jpg" alt="">
                    <h5>Anaadi <br> 
                        <div class="artist">Seedhe Maut</div></h5>
                    <i class="bi playPlayList bi-play-circle-fill"  id="3"></i>
                </li>
                <li class="songItem">
                    <span>04</span>
                    <img src="Covers/Anaadi.jpg" alt="">
                    <h5>Anaadi <br> 
                        <div class="artist">Seedhe Maut</div></h5>
                    <i class="bi playPlayList bi-play-circle-fill"  id="4"></i>
                </li>
                <li class="songItem">
                    <span>05</span>
                    <img src="Covers/Anaadi.jpg" alt="">
                    <h5>Anaadi <br> 
                        <div class="artist">Seedhe Maut</div></h5>
                    <i class="bi playPlayList bi-play-circle-fill"  id="5"></i>
                </li>
                <li class="songItem">
                    <span>06</span>
                    <img src="Covers/Anaadi.jpg" alt="">
                    <h5>Anaadi <br> 
                        <div class="artist">Seedhe Maut</div></h5>
                    <i class="bi playPlayList bi-play-circle-fill"  id="6"></i>
                </li>
                <li class="songItem">
                    <span>07</span>
                    <img src="Covers/Anaadi.jpg" alt="">
                    <h5>Anaadi <br>
                         <div class="artist">Seedhe Maut</div></h5>
                    <i class="bi playPlayList bi-play-circle-fill"  id="7"></i>
                </li>
                <li class="songItem">
                    <span>08</span>
                    <img src="Covers/Anaadi.jpg" alt="">
                    <h5>Anaadi <br> 
                        <div class="artist">Seedhe Maut</div></h5>
                    <i class="bi playPlayList bi-play-circle-fill"  id="8"></i>
                </li>
            </div>
        </div>



        <div class="song_box">
            <nav>
                <ul>
                    <li>Discover <span> </span></li>
                    <li>My Library</li>
                    <li>Radio</li>
                </ul>
                <div class="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Search Music">
                    <div class="search_results">
                        <!-- <a href="" class="cards">
                            <img src="img/1.jpg" alt="">
                            <div class="search_content">
                                On My Way
                                <div class="artist">
                                    Alan Walker
                                </div>
                            </div>
                        </a> -->
                    </div>
                </div>
                <div class="user">
                   <a href="login.php"><img src="img/profile.jpg" id="profileImg" alt="" srcset=""></a> 
                </div>
            </nav>
            <div class="content">
                <h1>Alan Walker</h1>
                <p>You were the shadow to my light did you feel us? Another star you fade <br>Away afraid our aim is out of sight wanna see you alive</p>
           <div class="buttons">
            <button>Play</button>
            <button>Follow</button>
           </div>
            </div>
            <div class="popular-song">
                <div class="h4"> 
                    <h4>Popular Song</h4>
                    <div class="btns">
                        <i class="bi bi-arrow-left-short" id="pop-song-left"></i>
                        <i class="bi bi-arrow-right-short" id="pop-song-right"></i>
                    </div>
                </div>
                <div class="allSongs">
                    <li class="songItem">
                       <div class="img-play">
                           <img src="img/1.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="9"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="10"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="11"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="12"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="13"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="14"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="15"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="16"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="17"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="18"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="19"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div></h5>
                    </li>
                    <li class="songItem">
                       <div class="img-play">
                           <img src="Covers/Anaadi.jpg" alt="">
                           <i class="bi playPlayList bi-play-circle-fill"  id="20"></i>

                       </div>
                        <h5>Anaadi <br> 
                            <div class="artist">Seedhe Maut</div>
                        </h5>
                    </li>
                   
                      
                </div>
            </div>
            <div class="popular-artists">
                <div class="h4"> 
                    <h4>Popular Artists</h4>
                    <div class="btns">
                      
                    </div>
                    <div class="pop-artists">
                        <li>
                            <a href='arijit.html'>
                         <img src="img/arjit.jpg" alt="" srcset="">
                            </a>
                        </li>
                        <li>
                            <a href='seedhe_maut.html'>
                         <img src="img/Seedhe Maut/seedhe maut.jpg" alt="" srcset="">
                            </a>
                        </li>
                        <li>
                            <img src="img/guru.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/honey.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/dhvani.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/Diljit_Dosanjh.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/atif.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/jubin Nautiyal.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/neha.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/akhil.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/alan.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/arjit.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/arjit.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/arjit.jpg" alt="" srcset="">
                        </li>
                        <li>
                            <img src="img/arjit.jpg" alt="" srcset="">
                        </li>
                    </div>
                </div>
            </div>
        </div>




        <div class="masterplay">
            <div class="wave" id = "wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="img/1.jpg" alt="" id="poster_play">
            <h5 id="title"> 
                On My Way
                <div class="artist">Alan Walker</div>
            </h5>
            <div class="icons">
                <i class="bi suffle bi-music-note-beamed">next</i>
                <i class="bi bi-skip-start-fill" id="previous"></i>
                <i class="bi bi-play-circle-fill" id="playmusic"></i>
                <i class="bi bi-skip-end-fill" id="next"></i>
                <a href="" download="" id="downloadsong">
                    <i class="bi bi-cloud-arrow-down-fill" ></i>
                </a>
            </div>
            <span id="timestart">00:00</span>
            <div class="seekbar">
                <input type="range" id="bar" min="0" max="100">
                <div class="seekbar2" id="seekbar2">
                    
                </div >
                <div class="dot"></div>
                </div>
                <span id="timeEnd">00:30</span>
                <div class="volume">
                    <i class="bi bi-volume-up-fill" id="vol_down"></i>
                    <input type="range" id="vol" min="0" max="100">
                    <div class="volbar" id="volbar">
                  </div >
                    <div class="dot" id="voldot"></div>
                </div>
        </div>
    </header>
    <script src="script.js"></script>
</body>
</html>