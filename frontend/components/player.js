const changeColor = (num) => {
  const col = document.getElementById(num);
  if (col) {
    window.setTimeout(() => {
      const arr = Array.from(col.querySelectorAll('.tile-selected'));
      arr.forEach(el => (el.className = `tile-selected hit`));
      const arrIds = arr.map(el => el.id.slice(5, el.id.length));
      const audios = arrIds.map(el => new Audio(`tones/${el}.mp3`));
      audios.forEach(el => (el.play()));
      window.setTimeout(() => arr.forEach(el => (el.className = `tile-selected`)), 200);
    }, 120);
  }
};

export const playLoop = (num = 1) => {
  changeColor(num);
  window.setTimeout(() => { num <= 15 ? playLoop(num + 1) : playLoop(1); }, 120);
};
