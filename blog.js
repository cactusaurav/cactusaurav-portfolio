const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');

let isDarkTheme = false;

themeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.src = 'Image/night-mode.png';
        themeIcon.alt = 'Night Mode Icon';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.src = 'Image/day-mode.png';
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

function closeWebsite() {
    window.close();
}

function minimizeWindow() {
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

function enterFullScreenOnMobile() {
    if (window.innerWidth <= 768) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    }
}

window.onload = enterFullScreenOnMobile;
const images = document.querySelectorAll('.column img');

window.onscroll = function () { scrollFunction() };

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
        return "Image/dark-up-arrow.png";
    } else {
        return "Image/up-arrow.png";
    }
}

function setupHoverEffect(blogClass) {
    const hoverLinks = document.querySelectorAll(`.${blogClass} .hover-link`);
    const floatingImage = document.querySelector(`.${blogClass} .floating-image`);
    let isHovering = false;
    let lastX = 0, lastY = 0;

    function positionImage(event) {
        if (isHovering) {
            lastX = event.clientX;
            lastY = event.clientY;
            requestAnimationFrame(updateImagePosition);
        }
    }

    function updateImagePosition() {
        if (isHovering) {
            floatingImage.style.left = `${lastX - (floatingImage.clientWidth / 2)}px`;
            floatingImage.style.top = `${lastY - floatingImage.clientHeight - 20}px`;
        }
    }

    hoverLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            isHovering = true;
            floatingImage.style.opacity = '1';
            document.addEventListener('mousemove', positionImage);
        });

        link.addEventListener('mouseout', () => {
            isHovering = false;
            floatingImage.style.opacity = '0';
            document.removeEventListener('mousemove', positionImage);
        });
    });
}

function searchPosts() {
    const query = document.getElementById('search').value.toLowerCase();
    const postsContainer = document.querySelector('.container');
    const posts = postsContainer.getElementsByClassName('blog');

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const title = post.querySelector('a').textContent.toLowerCase();
        const date = post.parentElement.querySelector('.date');

        if (title.includes(query)) {
            post.style.display = '';
            if (date) {
                date.style.display = '';
            }
        } else {
            post.style.display = 'none';
            if (date) {
                date.style.display = 'none'; // Hide date if not found
            }
        }
    }
}

// Initialize hover effects for each blog post
setupHoverEffect('blog1');
setupHoverEffect('blog2');

// Add event listener for search functionality
document.getElementById('search').addEventListener('input', searchPosts);
