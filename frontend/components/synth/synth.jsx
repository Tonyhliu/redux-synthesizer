import React from 'react';
import Note from '../../util/note';
import { NOTE_NAMES, TONES } from '../../util/tones';

// const Synth = () => (
//   <div>Synth</div>
// );

window.note = Note;

class Synth extends React.Component {
  constructor(props) {
    super(props);
    let noteNames = NOTE_NAMES;
    let tones = TONES;
    this.notes = noteNames.map(note => {
      new window.note(tones[note]); // an array of the Note instances
    });
  }

  render() {
    return(
      <ul>
        {this.notes}
      </ul>
    );
  }
}


export default Synth;
