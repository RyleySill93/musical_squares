# Pentatonix

Pentatonix is a website inspired by Tonematrix. The project allows users
to select notes on a grid from the pentatonic scale which will be played
when looped over.

[Demo][demo]

[demo]: https://ryleysill93.github.io/musical_squares/

![pentatonix](/docs/pentatonix.png)


## Features & Implementation

#### Playing the Grid

Each column of tiles is played consecutively, and then starts over from
the beginning when the last column is played. This is achieved using a
recursive function with a setTimeout to play each column and jQuery to
identify the selected tiles within a column and play each of their tones.

```
const playColumn = (num) => {
  const col = document.getElementById(num);
  if (col) {
    window.setTimeout(() => {
      const arr = Array.from(col.querySelectorAll('.tile-selected'));
      arr.forEach(el => (el.className = `tile-selected hit`));
      const arrIds = arr.map(el => el.id.split(',')[1]);
      const audios = arrIds.map(el => new Audio(`tones/${el}.mp3`));
      audios.forEach(el => (el.play()));
      window.setTimeout(() => arr.forEach(el => (el.className = `tile-selected`)), 200);
    }, 120);
  }
};

export const playLoop = (num = 1) => {
  playColumn(num);
  window.setTimeout(() => { num <= 15 ? playLoop(num + 1) : playLoop(1); }, 120);
};

```

#### Selection of Tiles

When a user clicks on a tile, that tile becomes 'selected' and will be
played the next time that its column is played. To deselect a tile, the
user simply clicks on the tile again. The tiles maintain their own
internal state which toggles their class to either 'tile' or 'tile-selected'

```
handleClick () {
  this.setState({ selected: !this.state.selected });
}
```

```
<div className={this.className()}
     key={`Tile ${this.props.x}, ${this.props.y}`}
     onClick={this.handleClick}
     id={[this.props.x, this.props.y]}>
</div>
```

#### Future iterations

In the future, this project may include these additional features:

- More instruments and an instrument selector
- A clear button to restart the grid
- Additional styling to the tiles when they are played
