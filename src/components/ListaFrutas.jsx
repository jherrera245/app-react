import PropTypes from 'prop-types';

const ListaFrutas = ({ frutas }) => {
    return (
        <ul>
            {frutas.map((fruta, index) => {
                return (
                    <li key={index}>
                        {" "}
                        {index} - {fruta}
                    </li>
                );
            })}
        </ul>
    );
}

ListaFrutas.propTypes = {
    frutas: PropTypes.array.isRequired,
};

export default ListaFrutas;
