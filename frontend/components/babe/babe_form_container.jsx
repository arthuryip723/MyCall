import { connect } from 'react-redux';
import { createBabe } from '../../actions/babe_actions';
import BabeForm from './babe_form';

const mapStateToProps = (state) => {
  const babe = state.currentBabe;
  return {babe};
};

const mapDispatchToProps = dispatch => ({
  createBabe: babe => dispatch(createBabe(babe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BabeForm);