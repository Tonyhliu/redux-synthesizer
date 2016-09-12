import React from 'react';
import Note from '../../util/note';
import { NOTE_NAMES, TONES } from '../../util/tones';
import $ from 'jquery';
import NoteKey from './note_key';

// const Synth = () => (
//   <div>Synth</div>
// );

class Synth extends React.Component {
  constructor(props) {
    super(props);
    // let noteNames = NOTE_NAMES; // WHAT? Async?
    // let tones = TONES; // WHAT? Async?
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note])); // array of the Note instances
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {

      // play notes present in state
      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  render() {
    this.playNotes();
    const noteKeys = NOTE_NAMES.map((note, idx) => {
      return (<NoteKey key={idx} note={note} />);
    });

    return(
      <div>
        {noteKeys}
      </div>
    );
  }
};

export default Synth;
