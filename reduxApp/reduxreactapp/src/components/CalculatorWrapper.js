import { connect } from 'react-redux';
import Calculator from './Calculator';
import { bindActionCreators } from 'redux';
import { increment, add } from '../store/actions';

function mapStateToProps(state) {
    return {
        value: state.value
    };
}

// function mapDispathToProps(dispatch) {
//     return {
//         inc: bindActionCreators(increment, dispatch)
//     };
// }

const mapDispathToProps = {
    inc: increment,
    add: add
};

export default connect(mapStateToProps, mapDispathToProps)(Calculator);
