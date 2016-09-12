import { connect } from 'react-redux';
import Synth from './synth';
import { keyPressed, keyReleased } from '../../actions/notes_actions';

// state is object
// subscribe to state, to pass props to presentation layer (aka App component)
const mapStateToProps = ({ notes }) => ({
  notes
});

// actions to dispatch (can use in app component)
const mapDispatchToProps = dispatch => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);

// mapStateToProps reads state held by store
// mapDispatchToProps dispatches actions to the store
// call connect(MSTP, MDTP) on Synth element to connect it to Redux store
