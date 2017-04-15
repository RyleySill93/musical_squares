## Musical Squares

### Background

Musical squares is essentially a few columns of xylopones that will play in order and loop
over and over, playing whatever notes have been selected. It will appear as a grid of
tiles that the user will be able to select. If the user selects a particular tile, it will
be played on the next loop.

### Functionality & MVP  

In Musical Squares, users will be able to:

- [ ] select tiles to be played on a loop
- [ ] deselect previously selected tiles to be played on a loop

In addition, this project will include:

- [ ] Visual effects that will appear as a ripple through a tile once a particular tile is 'played'
- [ ] A production Readme

### View

This will be a very simple instrument and will appear as a grid of 16 tiles that light up once they are played. There will be no other text other than 'select a square to begin'

### Architecture and Technologies

**NB**: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use.  Identify and create a plan of attack for the major technical challenges in your project.  It's okay if you don't have all the details of implementation fleshed out, but you should have a solid roadmap by Monday morning.

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be two scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary elements and rendering them to the DOM.

`music.js`: this script will handle the logic behind the selection of tiles. As the script moves through each column, all of that column's tiles will be played if they are selected.

### Implementation Timeline

**Day 1**: Setup the entire view for the project, including the visual effects.
Since this is a simple app, I should be able to create the grid of 16 tiles,
get them to light up once selected, and get the adjacent tiles to light up (more dimly).

**Day 2**: This day will be dedicated to getting the sound to work appropriately. I will
have to select the right sound and tones for the grid of musical squares to sound well together regardless of what squares have been selected (pentatonic scale notes).

**Day 3**: Clean up the user interface and get multi-tile (click and drag selection) working.


**Day 4**: This day will be dedicated to squashing any bugs and adding any
additional functionality I think up along the way. This may include speeding up the
loop, adding other sound such as drums, or changing the colors of the tiles.
