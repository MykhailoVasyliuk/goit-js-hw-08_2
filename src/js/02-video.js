
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentVideoTime = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', throttle(onCurrentVideoTime, 1000));

function onCurrentVideoTime(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

player.setCurrentTime(currentVideoTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
