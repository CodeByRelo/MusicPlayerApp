const playlist = [
    { title: "Chill Vibes", file: "assets/music/Indie.mp3" },
    { title: "Workout Beat", file: "assets/music/Reggae.mp3" },
    { title: "Ambient Dreams", file: "assets/music/HipHop.mp3" }
  ];
  
  let currentTrack = 0;
  const audio = document.getElementById('audio');
  const volumeSlider = document.getElementById('volume');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressContainer = document.getElementById('progressContainer');
  const progress = document.getElementById('progress');
  
  function loadTrack(index) {
    currentTrack = index;
    audio.src = playlist[index].file;
    audio.play();
    playPauseBtn.textContent = '⏸️';
  }
  
  function playTrack(index) {
    loadTrack(index);
  }
  
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = '⏸️';
    } else {
      audio.pause();
      playPauseBtn.textContent = '▶️';
    }
  }
  
  function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
  }
  
  function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
  }
  
  // Update volume based on slider
  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  });
  
  // Update progress bar while playing
  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
  });
  
  // Click on progress bar to seek
  function seek(event) {
    const width = progressContainer.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }
  
  // Go to next track when current ends
  audio.addEventListener('ended', nextTrack);
  
  // Allow seeking by clicking on the progress container
  progressContainer.addEventListener('click', seek);
  
  // Load the first track on page load
  window.onload = () => loadTrack(currentTrack);
  
  function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
  }
  
  function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
  }
  
  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  });
  
  // Auto switch to next track when current one ends
  audio.addEventListener('ended', nextTrack);
  
  // Load first track on page load
  window.onload = () => loadTrack(currentTrack);
  