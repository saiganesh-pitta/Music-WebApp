let song1= new Audio("/songs/song1.mp3");
let song2= new Audio("/songs/song2.mp3");
let song3= new Audio("songs/song3.mp3");
let song4= new Audio("songs/song4.mp3");
let song5= new Audio("songs/song5.mp3");
let song6= new Audio("songs/song6.mp3");
let song7= new Audio("songs/song7.mp3");
let song8= new Audio("songs/song8.mp3");
let song9= new Audio("songs/song9.mp3");
let song10= new Audio("songs/song10.mp3");
let song11= new Audio("songs/song11.mp3");
let song12= new Audio("songs/song12.mp3");
let song13= new Audio("songs/song13.mp3");
 let inputSongs=["song1.mp3","song2.mp3",
                "song3.mp3","song4.mp3",
                "song5.mp3","song6.mp3",
                "song7.mp3","song8.mp3","song9.mp3",
                "song10.mp3","song11.mp3",
                "song12.mp3","song13.mp3"];
                console.log(inputSongs[1]);
allsongs1=[song1.src,song2.src,song3.src,song4.src,song5.src,song6.src];
allsongs2=[song7.src,song8.src,song9.src,song10.src,song11.src,song12.src,song13.src];
allsongs3=[song10.src,song11.src,song12.src,song13.src];
      
console.log(allsongs1);

let nowPlaying = new Audio();


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}


    // Show all the songs in the playlist  (muscic card-1)
    
    //    music card 1
   let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    document.querySelector("#card1").addEventListener("click",()=>{    
    songUL.innerHTML = ""
    for (let songs of allsongs1) {
    let val1=songs.split("songs/")[1];
    songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" width="34" src="img/music.svg" alt="">
                                              <div class="info">
                                                <div>${val1}</div>
                                                  <div>SAI</div>
                                                </div>
                                                <div class="playnow">
                                                    <span>Play Now</span>
                                                    <img class="invert" src="img/play.svg" alt="">
                                                </div> </li>`;          
    }

    // Attach an event listener to each song
   Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML)
            console.log("clicked")
        })
    })
})

 let playMusic = (music,pause=false) => {
    nowPlaying.src ="/songs/"+music ;
    if (!pause) {
        nowPlaying.play()
        play.src = "img/pause.svg"
    }
    console.log(music)
    document.querySelector(".songinfo").innerHTML = music;
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(nowPlaying.currentTime)}/${secondsToMinutesSeconds(nowPlaying.duration)}`   
}
      
    // nowPlaying song
       playMusic(inputSongs[0],true);

    // Display all the albums on the page

    // Attach an event listener to play, next and previous
    play.addEventListener("click", () => {
        if (nowPlaying.paused) {
            nowPlaying.play()
            play.src = "img/pause.svg"
        }
        else {
            nowPlaying.pause()
            play.src = "img/play.svg"
        }
    })

    // Listen for timeupdate event
    nowPlaying.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(nowPlaying.currentTime)}/${secondsToMinutesSeconds(nowPlaying.duration)}`
        document.querySelector(".circle").style.left = (nowPlaying.currentTime / nowPlaying.duration) * 100+"%";
        if(nowPlaying.currentTime>=nowPlaying.duration){
       play.src="img/play.svg"
   }else{ }
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        nowPlaying.currentTime = ((nowPlaying.duration) * percent) / 100;
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "0"
        console.log("clicked");
    })

    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    });
  let n=0;
    // Add an event listener to previous
    previous.addEventListener("click", () => {
         nowPlaying.pause()
        console.log("Previous clicked")
        n = (n-1+inputSongs.length) % inputSongs.length;
         playMusic(inputSongs[n]);
    })
    // Add an event listener to next
    next.addEventListener("click", () => {
         nowPlaying.pause()
        console.log("Next clicked")
         n = (n + 1) % inputSongs.length;
         playMusic(inputSongs[n]);      
    })

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100")
        nowPlaying.volume = parseInt(e.target.value) / 100
        if (nowPlaying.volume >0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
        }
    })
    // Add event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            nowPlaying.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            nowPlaying.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    })

//         music card 2
   document.querySelector("#card2").addEventListener("click",()=>{
    songUL.innerHTML = ""
    for (let songs of allsongs2) {
    let val2=songs.split("songs/")[1];
    songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" width="34" src="img/music.svg" alt="">
                                              <div class="info">
                                                <div>${val2}</div>
                                                  <div>SAI</div>
                                                </div>
                                                <div class="playnow">
                                                    <span>Play Now</span>
                                                    <img class="invert" src="img/play.svg" alt="">
                                                </div> </li>`;  
     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML)
            console.log("clicked")                                            

    })})}})

    //         music card 3
 document.querySelector("#card3").addEventListener("click",()=>{
    songUL.innerHTML = ""
    for (let songs of allsongs3) {
    let val3=songs.split("songs/")[1];
    songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" width="34" src="img/music.svg" alt="">
                                              <div class="info">
                                                <div>${val3}</div>
                                                  <div>SAI</div>
                                                </div>
                                                <div class="playnow">
                                                    <span>Play Now</span>
                                                    <img class="invert" src="img/play.svg" alt="">
                                                </div> </li>`;   

        Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML)
            console.log("clicked")                                            

    })})}})
                                        
     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML)
            console.log("clicked")                                            

    })})

    //    music card 4
     document.querySelector("#card4").addEventListener("click",()=>{
    songUL.innerHTML = "" 
         playMusic(inputSongs[12]);
     });
      //    music card 5
     document.querySelector("#card5").addEventListener("click",()=>{
    songUL.innerHTML = "" 
                  playMusic(inputSongs[11]);
     }); //    music card 6
     document.querySelector("#card6").addEventListener("click",()=>{
    songUL.innerHTML = "" 
                 playMusic(inputSongs[7]);
     }); //    music card 7
     document.querySelector("#card7").addEventListener("click",()=>{
    songUL.innerHTML = "" 
                 playMusic(inputSongs[9]);
     }); //    music card 8
     document.querySelector("#card8").addEventListener("click",()=>{
    songUL.innerHTML = "" 
               playMusic(inputSongs[8]);
     }); //    music card 9
     document.querySelector("#card9").addEventListener("click",()=>{
    songUL.innerHTML = "" 
                 playMusic(inputSongs[1]);
     }); //    music card 10
     document.querySelector("#card10").addEventListener("click",()=>{
    songUL.innerHTML = "" 
                 playMusic(inputSongs[6]);
     }); //    music card 11
     document.querySelector("#card11").addEventListener("click",()=>{
    songUL.innerHTML = "" 
                 playMusic(inputSongs[5]);
     }); //    music card 12
     document.querySelector("#card12").addEventListener("click",()=>{
    songUL.innerHTML = "" 
                  playMusic(inputSongs[4]);
     });
      //    music card 13
     document.querySelector("#card12").addEventListener("click",()=>{
    songUL.innerHTML = "" 
                  playMusic(inputSongs[1]);
     });