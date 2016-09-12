// import React from 'react';
// import Note from '../../util/note';
// import { TONES } from '../../util/tones';
// import { NOTE_NAMES } from '../../util/tones';

// const Synth = () => (
//   <div>Synth</div>
// );

class Synth extends React.component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => {
      new Note(TONES[note]); // an array of the Note instances
    })
  }

  

}


// export default Synth;
