import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const LS_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    const currentTime = data.seconds;
    localStorage.setItem(LS_KEY, currentTime);
  }, 1000)
);

const iframe = document.querySelector('iframe');

const saveTime = localStorage.getItem(LS_KEY);

if (saveTime !== null) {
  player.setCurrentTime(saveTime);
}
