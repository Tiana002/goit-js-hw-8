import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe =document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function(evt) {
localStorage.setItem('videoplayer-current-time', evt.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0);



