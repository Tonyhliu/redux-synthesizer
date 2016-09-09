import { connect } from 'react-redux';
import Synth from './synth';
import { keyPressed, keyReleased } from '../../actions/note_actions';

// state is object
const mapStateToProps = ({ notes }) => ({
  notes
});

const mapDispatchToProps = dispatch => ({
  keyPressed: key => dispatch(keyPressed(key)),
  keyReleased: key => dispatch(keyReleased(key))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);

// mapStateToProps reads state held by store
// mapDispatchToProps dispatches actions to the store
// call connect(MSTP, MDTP) on Synth element to connect it to Redux store
