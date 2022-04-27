import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';
const timeRestore = localStorage.getItem(currentTime);

player.on(
    'timeupdate',
    throttle(data => {
    localStorage.setItem(currentTime, Math.floor(data.seconds));
    }, 1000),
);

if (timeRestore) {
    player.setCurrentTime(timeRestore);
}
