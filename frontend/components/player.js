const changeColor = (num) => {
  const col = document.getElementById(num);
  if (col) {
    window.setTimeout(() => {
      const arr = Array.from(col.querySelectorAll('.tile-selected'));
      const arrIds = arr.map(el => el.id);
      const audios = arr.map(el => `${el}.mp3`);
      arr.forEach(el => (el.className = `tile-selected hit`));
      audios.forEach(el => (el.play()));
      window.setTimeout(() => arr.forEach(el => (el.className = `tile-selected`)), 200);
    }, 120);
  }
};

export const playLoop = (num = 1) => {
  changeColor(num);
  window.setTimeout(() => { num <= 16 ? playLoop(num + 1) : playLoop(1); }, 120);
};
