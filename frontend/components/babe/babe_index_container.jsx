import { connect } from 'react-redux';
import { fetchBabes } from '../../actions/babe_actions';
import { asArray } from '../../reducers/selectors';
import BabeIndex from './babe_index';

const mapStateToProps = state => ({
  babes: asArray(state.babes)
});

const mapDispatchToProps = dispatch => ({
  fetchBabes: () => dispatch(fetchBabes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BabeIndex);
