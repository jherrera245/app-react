import PropTypes from "prop-types";

const MiBoton = ({ text, className }) => {
    const handleClick = (text) => {
        console.log("Haz dado click al " + text);
    };

    return (
        <button onClick={() => handleClick(text)} className={className}>
            {text}
        </button>
    );
};

MiBoton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default MiBoton;
