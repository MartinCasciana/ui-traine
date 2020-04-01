import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchAnimalsRequested
} from '../../actions/animal'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [animals] = useSelector(state => state.animal.documents.animals);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchAnimalsRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            <center><h3><b>Edicion del Animal</b></h3></center>
            <form className="text-center">
                <label for="animal">
                    Tipo de Animal: 
                <input id="animal" type="text" animal="animal" placeholder="Entrada del animal" required/>
                </label>
                <br/>
                <br/>
                <label for="scientific_name">
                    Nombre científico del Animal:
                <input id="scientific_name" type="text" scientific_name="scientific_name" placeholder="Entrada del nombre científico" required />
                </label>
                <br/>
                <br/>
                <label for="gender">
                    Género del Animal:
                <input id="gender" type="text" gender="gender" placeholder="Entrada del genero" required />
                </label>
                <br/>
                <input type="submit" value="Enviar Modificacion" />
            </form>
        </div>
    )
};
export default Edit;
