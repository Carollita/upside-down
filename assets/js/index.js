function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'
    //if theme equal light-theme play normal-world.mpeg, else play inverted-world.mpeg

    const audio = document.getElementById('music');
    audio.src = `assets/audios/${music}`;
    audio.play();
    audio.volume = 0.2;
  };