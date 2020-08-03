const playSound = (src) => {
  const audio = document.createElement('audio');
  audio.setAttribute('autoplay', 'true');
  audio.innerHTML = `<source src="${src}" type="audio/mpeg">`;
  document.body.appendChild(audio);
};

export default playSound;
