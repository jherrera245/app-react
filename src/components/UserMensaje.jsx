import PropTypes from 'prop-types';
import MensajeOnline from './MensajeOnline';
import MensajeOffline from './MensajeOffline';

const UserMensaje = ({ usuario }) => {
    return usuario ? <MensajeOnline /> : <MensajeOffline />;
};

UserMensaje.propTypes = {
    usuario: PropTypes.bool.isRequired,
};

export default UserMensaje;
