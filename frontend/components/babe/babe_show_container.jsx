import { connect } from 'react-redux';
import { fetchBabe } from '../../actions/babe_actions';
import { asArray } from '../../reducers/selectors';
import BabeShow from './babe_show';

const mapStateToProps = (state, { match }) => {
  const babeId = parseInt(match.params.babeId);
  const babe = state.currentBabe;
  return {
  	babeId,
  	babe
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBabe: id => dispatch(fetchBabe(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BabeShow);