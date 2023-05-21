import Player from '@vimeo/player';
const vimeoPlayer = new Player('vimeo-player');

vimeoPlayer.on('timeupdate', function(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

import throttle from 'lodash.throttle';

vimeoPlayer.on('timeupdate', throttle(function(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));
document.addEventListener('DOMContentLoaded', function() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    vimeoPlayer.setCurrentTime(parseFloat(currentTime));
  }
});