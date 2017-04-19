import React from 'react';
import Column from './column';
import { playLoop } from './player';

class Root extends React.Component {

  componentDidMount () {
    playLoop();
  }

  render () {
    let cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let grid = cols.map(idx => <Column idx={idx} key={idx} />);
    return (
      <div>
        <h1>PENTATONIX</h1>
        <div id="grid">
          { grid }
        </div>
        <h1>Pure CSS 3D flip buttons</h1>
        <div className="button-row">
          <div><a title="Button"></a></div>
          <div><a title="another!"></a></div>
        </div>
      </div>
    );
  }
}

export default Root;
