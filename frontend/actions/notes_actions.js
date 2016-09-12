export const NotesConstants = {
  KEY_PRESSED: "KEY_PRESSED",
  KEY_RELEASED: "KEY_RELEASED"
};

// add key as a property to the action to let store know which key to remove
// from its notes array
export const keyPressed = key => ({
  type: NotesConstants.KEY_PRESSED,
  key
});

export const keyReleased = key => ({
  type: NotesConstants.KEY_RELEASED,
  key
});
