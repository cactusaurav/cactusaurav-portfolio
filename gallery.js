const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');

let isDarkTheme = false;

themeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.src = 'night-mode.png'; 
        themeIcon.alt = 'Night Mode Icon';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.src = 'day-mode.png'; 
        themeIcon.alt = 'Day Mode Icon';
    }

    const currentTheme = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.src = 'night-mode.png';
    themeIcon.alt = 'Night Mode Icon';
    isDarkTheme = true;
} else if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.src = 'day-mode.png';
    themeIcon.alt = 'Day Mode Icon';
    isDarkTheme = false;
}


function enterFullScreenOnMobile() {
    if (window.innerWidth <= 768) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    }
}

window.onload = enterFullScreenOnMobile;
const images = document.querySelectorAll('.column img');

function closeWebsite() {
    window.close();
}

function minimizeWindow(){
(document.exitFullscreen) 
    document.exitFullscreen(); 
 }
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); 
         }
    }
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = "AM";

    if (hours >= 12) {
        meridiem = "PM";
        hours = hours % 12 || 12; 
    }

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();



document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var seekBar = document.getElementById("seek-bar");
    var currentTime = document.getElementById("current-time");
    var totalTime = document.getElementById("total-time");

    var video2 = document.getElementById("myVideo2");
    var seekBar2 = document.getElementById("seek-bar-2");
    var currentTime2 = document.getElementById("current-time-2");
    var totalTime2 = document.getElementById("total-time-2");

    var video3 = document.getElementById("myVideo3");
    var seekBar3 = document.getElementById("seek-bar-3");
    var currentTime3 = document.getElementById("current-time-3");
    var totalTime3 = document.getElementById("total-time-3");

    var video4 = document.getElementById("myVideo4"); 
    var seekBar4 = document.getElementById("seek-bar-4"); 
    var currentTime4 = document.getElementById("current-time-4"); 
    var totalTime4 = document.getElementById("total-time-4");
    
    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        return pad(minutes) + ":" + pad(seconds);
    }

    function pad(num) {
        return ("0" + num).slice(-2);
    }

    video.addEventListener("loadedmetadata", function() {
        totalTime.textContent = formatTime(video.duration);
        seekBar.max = video.duration;
    });

    video2.addEventListener("loadedmetadata", function() {
        totalTime2.textContent = formatTime(video2.duration);
        seekBar2.max = video2.duration;
    });
    video3.addEventListener("loadedmetadata", function() {
        totalTime3.textContent = formatTime(video3.duration);
        seekBar3.max = video3.duration;
    });
    video4.addEventListener("loadedmetadata", function() {
        totalTime4.textContent = formatTime(video4.duration);
        seekBar4.max = video4.duration;
    });

    video.addEventListener("timeupdate", function() {
        currentTime.textContent = formatTime(video.currentTime);
        seekBar.value = video.currentTime;
    });

    video2.addEventListener("timeupdate", function() {
        currentTime2.textContent = formatTime(video2.currentTime);
        seekBar2.value = video2.currentTime;
    });

    video3.addEventListener("timeupdate", function() {
        currentTime3.textContent = formatTime(video3.currentTime);
        seekBar3.value = video3.currentTime;
    });

    video4.addEventListener("timeupdate", function() {
        currentTime4.textContent = formatTime(video4.currentTime);
        seekBar4.value = video4.currentTime;
    });

    seekBar.addEventListener("input", function() {
        video.currentTime = seekBar.value;
    });

    seekBar2.addEventListener("input", function() {
        video2.currentTime = seekBar2.value;
    });
    seekBar3.addEventListener("input", function() {
        video3.currentTime = seekBar3.value;
    });
    seekBar4.addEventListener("input", function() {
        video4.currentTime = seekBar4.value;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var video1 = document.getElementById("myVideo");
    var seekBar1 = document.getElementById("seek-bar");
    var currentTime1 = document.getElementById("current-time");
    var totalTime1 = document.getElementById("total-time");

    var video2 = document.getElementById("myVideo2");
    var seekBar2 = document.getElementById("seek-bar-2");
    var currentTime2 = document.getElementById("current-time-2");
    var totalTime2 = document.getElementById("total-time-2");
   
    var video3 = document.getElementById("myVideo3");
    var seekBar3 = document.getElementById("seek-bar-3");
    var currentTime3 = document.getElementById("current-time-3");
    var totalTime3 = document.getElementById("total-time-3");
    
    var video4 = document.getElementById("myVideo4");
    var seekBar4 = document.getElementById("seek-bar-4");
    var currentTime4 = document.getElementById("current-time-4");
    var totalTime4 = document.getElementById("total-time-4");

    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        return pad(minutes) + ":" + pad(seconds);
    }

    function pad(num) {
        return ("0" + num).slice(-2);
    }

    function playVideo(video) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    function pauseVideo(video) {
        if (!video.paused) {
            video.pause();
        }
    }

    video1.addEventListener("click", function() {
        playVideo(video1);
        pauseVideo(video2);
        pauseVideo(video3);
        pauseVideo(video4);
    });

    video2.addEventListener("click", function() {
        playVideo(video2);
        pauseVideo(video1);
        pauseVideo(video3);
        pauseVideo(video4);
    });
    video3.addEventListener("click", function() {
        playVideo(video3);
        pauseVideo(video1); 
        pauseVideo(video2);
        pauseVideo(video4);
    });
    video4.addEventListener("click", function() {
        playVideo(video4);
        pauseVideo(video1); 
        pauseVideo(video2);
        pauseVideo(video3);
    });


});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
    document.getElementById("arrowIcon").src = getArrowImage(); 
    document.getElementById("backToTopBtn").href = "#top";
    document.getElementById("backToTopBtn").title = "Back to Top";
    document.getElementById("backToTopBtn").setAttribute("aria-label", "Back to Top");
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

function getArrowImage() {

  var isDarkTheme = document.body.classList.contains("dark-theme"); 
  if (isDarkTheme) {
    return "dark-up-arrow.png";
  } else {
    return "up-arrow.png";
  }
}