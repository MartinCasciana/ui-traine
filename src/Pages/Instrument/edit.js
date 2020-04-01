import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchInstrumentsRequested
} from '../../actions/instrument'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [instruments] = useSelector(state => state.instrument.documents.instruments);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchInstrumentsRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            <center><h3><b>Edicion del Instrumento</b></h3></center>
            <form className="text-center">
                <label for="family">
                    Familia del Instrumento: 
                <input id="family" type="text" family="family" placeholder="Entrada de la familia" required/>
                </label>
                <br/>
                <br/>
                <label for="name">
                    Nombre del Instrumento:
                <input id="name" type="text" instrument="instrument" placeholder="Entrada del instrumento" required />
                </label>
                <br/>
                <br/>
                <label for="hexcode">
                    Código Hex del Instrumento:
                <input id="hexcode" type="number" hexcode="hexcode" placeholder="Entrada del código hex" required />
                </label>
                <br/>
                <input type="submit" value="Enviar Modificacion" />
            </form>
        </div>
    )
};
export default Edit;
