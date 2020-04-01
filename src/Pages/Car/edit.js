import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchCarsRequested
} from '../../actions/car'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [cars] = useSelector(state => state.car.documents.cars);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchCarsRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            <center><h3><b>Edicion del Automovil</b></h3></center>
            <form className="text-center">
                <label for="brand">
                    Marca de Automovil: 
                <input id="brand" type="text" brand="brand" placeholder="Entrada de la Marca" required/>
                </label>
                <br/>
                <br/>
                <label for="model">
                    Modelo del Automovil:
                <input id="model" type="text" model="model" placeholder="Entrada del Modelo" required />
                </label>
                <br/>
                <br/>
                <label for="year">
                    Año del Automovil:
                <input id="year" type="number" year="year" placeholder="Entrada del Año" required />
                </label>
                <br/>
                <input type="submit" value="Enviar Modificacion" />
            </form>
        </div>
    )
};
export default Edit;