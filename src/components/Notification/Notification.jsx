import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
    return (
        <p className={css.notification}>{message}</p>
    );
}

Notification.protoType = {
    message: PropTypes.string,
}

export default Notification;