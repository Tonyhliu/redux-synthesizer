import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import { TONES } from './util/tones';
import { NOTE_NAMES } from './util/tones';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});

// window.note = Note;
// window.tones = TONES;
// window.note_names = NOTE_NAMES;
