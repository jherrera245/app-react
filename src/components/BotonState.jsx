import { useState } from "react";

const BotonState = () => {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
        console.log("Contador: " + contador);
    };

    return (
        <div className="text-center">
            <button onClick={handleClick} className="btn btn-info mt-3">Contador: {contador}</button>
        </div>
    );
};

export default BotonState;
