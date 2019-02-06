import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from '@relax-js/react-relax';

// import styles from './Amp.less';
import Slider from './Slider';

const Amp = () => {
    return (
        <div>
            <h3>Amp Settings</h3>
            <div className={'row'}>
                <div className={'col-sm-6'}>
                    <Slider channel={1} />
                    <Slider channel={2} />
                    <Slider channel={3} />
                </div>
                <div className={'col-sm-6'}>
                    <Slider channel={4} />
                    <Slider channel={5} />
                    <Slider channel={6} />
                </div>
            </div>
        </div>
    );
};

// Counter.propTypes = {
//     count: PropTypes.number,
//     increment: PropTypes.func.isRequired,
// };

// Counter.defaultProps = {
//     count: 0,
// };

// const mapStateToProps = () => ({
// });

// const mapDispatchToProps = {
// };

export default Amp;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
