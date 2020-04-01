import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCountriesRequested
} from '../../actions/country'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [countries] = useSelector(state => state.country.documents.countries);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchCountriesRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            <center><h3><b>Edicion del Pais</b></h3></center>
            <form className="text-center">
                <label for="name">
                    Pais: 
                <input id="name" type="text" name="name" placeholder="Entrada del Pais" required/>
                </label>
                <br/>
                <br/>
                <label for="code">
                    Codigo del Pais:
                <input id="code" type="text" code="code" placeholder="Entrada del Codigo" required />
                </label>
                <br/>
                <input type="submit" value="Enviar Modificacion" />
            </form>
        </div>
    )
};
export default Edit;