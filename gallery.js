
document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle Functionality
    const themeButton = document.getElementById('theme-button');
    const themeIcon = document.getElementById('theme-icon');
    let isDarkTheme = localStorage.getItem('theme') === 'dark';

    function updateTheme() {
        document.body.classList.toggle('dark-theme', isDarkTheme);
        document.body.classList.toggle('light-theme', !isDarkTheme);
        themeIcon.src = isDarkTheme ? 'Image/night-mode.png' : 'Image/day-mode.png';
        themeIcon.alt = isDarkTheme ? 'Night Mode Icon' : 'Image/Day Mode Icon';
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }

    themeButton.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        updateTheme();
    });

    updateTheme(); // Set initial theme based on local storage

    // Fullscreen Functionality
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    function enterFullScreenOnMobile() {
        if (window.innerWidth <= 768 && !document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    }

    window.onload = enterFullScreenOnMobile;

    // Clock Update Functionality
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${meridiem}`;

        document.getElementById('clock').textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Video Controls Functionality
    const videos = {
        myVideo: {
            video: document.getElementById('myVideo'),
            seekBar: document.getElementById('seek-bar'),
            currentTime: document.getElementById('current-time'),
            totalTime: document.getElementById('total-time')
        },
        myVideo2: {
            video: document.getElementById('myVideo2'),
            seekBar: document.getElementById('seek-bar-2'),
            currentTime: document.getElementById('current-time-2'),
            totalTime: document.getElementById('total-time-2')
        },
        myVideo3: {
            video: document.getElementById('myVideo3'),
            seekBar: document.getElementById('seek-bar-3'),
            currentTime: document.getElementById('current-time-3'),
            totalTime: document.getElementById('total-time-3')
        },
        myVideo4: {
            video: document.getElementById('myVideo4'),
            seekBar: document.getElementById('seek-bar-4'),
            currentTime: document.getElementById('current-time-4'),
            totalTime: document.getElementById('total-time-4')
        }
    };

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function initializeVideoControls(videoConfig) {
        const { video, seekBar, currentTime, totalTime } = videoConfig;

        video.addEventListener('loadedmetadata', function () {
            totalTime.textContent = formatTime(video.duration);
            seekBar.max = video.duration;
        });

        video.addEventListener('timeupdate', function () {
            currentTime.textContent = formatTime(video.currentTime);
            seekBar.value = video.currentTime;
        });

        seekBar.addEventListener('input', function () {
            video.currentTime = seekBar.value;
        });

        video.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                Object.values(videos).forEach(v => {
                    if (v.video !== video && !v.video.paused) v.video.pause();
                });
            } else {
                video.pause();
            }
        });
    }

    Object.values(videos).forEach(initializeVideoControls);

    // Back to Top Button Functionality
    function scrollFunction() {
        const backToTopBtn = document.getElementById('backToTopBtn');
        const arrowIcon = document.getElementById('arrowIcon');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
            arrowIcon.src = getArrowImage();
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function getArrowImage() {
        return document.body.classList.contains('dark-theme') ? 'Image/dark-up-arrow.png' : 'Image/up-arrow.png';
    }

    window.onscroll = scrollFunction;
    document.getElementById('backToTopBtn').addEventListener('click', scrollToTop);

    // Video Slider Functionality
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const videoWrapper = document.querySelector('.video-wrapper');
    const videoItems = document.querySelectorAll('.video-item');
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100;
        videoWrapper.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : videoItems.length - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < videoItems.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Optional: Add touch support for swiping on mobile devices
    let startX;

    videoWrapper.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });

    videoWrapper.addEventListener('touchend', function (e) {
        const endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            nextButton.click();
        } else if (startX < endX - 50) {
            prevButton.click();
        }
    });
});
