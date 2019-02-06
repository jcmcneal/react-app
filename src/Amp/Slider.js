import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from '@relax-js/react-relax';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import socket from '../WebSocket/WebSocket';

import styles from './Amp.less';

const onChange = ({ channel, level, io }) => {
    socket.send(`"command": "setvolume", "channel": "${io}${channel}", "level": "${level}"`);
};

const Slider = (props) => {
    return (
        <div className='mt-3 p-3 box'>
            {/* <div className={'float-right'}><Icon icon={'volume-mute'} /></div> */}
            <h4>Channel {props.channel}</h4>
            <div className={'text-primary'}>Input</div>
            <input
                type='range'
                className={styles.slider}
                min='1'
                max='100'
                defaultValue='50'
                onChange={e => onChange({
                    ...props,
                    io: 'i', // input
                    level: e.target.value,
                })}
            />
            <div className={'text-primary'}>Output</div>
            <input
                type='range'
                className={styles.slider}
                min='1'
                max='100'
                defaultValue='50'
                onChange={e => onChange({
                    ...props,
                    io: 'o', // output
                    level: e.target.value,
                })}
            />
        </div>
    );
};

Slider.propTypes = {
    channel: PropTypes.number,
};

// Counter.defaultProps = {
//     count: 0,
// };

// const mapStateToProps = () => ({
// });

// const mapDispatchToProps = {
// };

export default Slider;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
