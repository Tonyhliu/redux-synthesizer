import NotesConstants from '../actions/note_actions';
import NOTE_NAMES from '../util/tones';

const validKeys = ['a', 's', 'd', 'f']; // stores synthesizer's keyboard keys
const keyMap = {} // maps keyboard keys to notes
validKeys.forEach((key, i) => {
  keyMap[key] = NOTE_NAMES[i];
});

const notes = (state = [], action) => {
  // convert key to note
  const note = keyMap[action.key];
  // check & see if note is in prev state
  const idx = state.indexOf(note);

  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if (note && idx === -1) {
        return [...state, note];
      }
      return state;
    case NotesConstants.KEY_RELEASED:
      if (idx !== -1) {
        return [...state.slice(0, idx), state.slice(idx + 1)];
      }
      return state;
    default:
      return state;
  }
};

export default notes;