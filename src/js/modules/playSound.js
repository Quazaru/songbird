const playSound = (src) => {
  const sound = new Audio();
  sound.src = src;
  sound.play();
};

export default playSound;
