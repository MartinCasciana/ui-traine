import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    fetchAnimalRequested, // fetch One, para edicion <<<
    submitAnimalRequested, // Sagas / Api Action <<< 
    updateAnimalData // Only Reducers <<< 
} from '../../actions/animal'

import {
    Row,
    Col,
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import map from 'lodash/map';
import get from 'lodash/get';
import set from 'lodash/set';

const fieldsData = [
    {
        control: 'animal',
        label: 'Animal',
        path: 'animal',
        value: null,
        type: 'text'
    },
    {
        control: 'scientific name',
        label: 'Nombre científico',
        path: 'scientific name',
        value: null,
        type: 'text'
    },
    {
        control: 'gender',
        label: 'Género',
        path: 'gender',
        value: null,
        type: 'text'
    }
];

class Edit extends PureComponent {
    /*componentDidMount() se invoca inmediatamente después de que un componente se monte.*/
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getAnimal();
        }
    }

    handleSubmit(event) {//es una funcio reservada?//handle se usa en funciones referidas a eventos?

        event.preventDefault();//en React no puedes retornar false 
                            //para prevenir el comportamiento por defecto. 
                            //Debes, explícitamente, llamar preventDefault.
        this.props.submitAnimal()
    }

    //render() Un componente con una render prop toma una función
    //que devuelve un elemento de React y lo
    //llama en lugar de implementar su propia
    //lógica de representación.
    render() {
        const {fields} = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            {map(fields, field => (
                                <FormGroup>
                                    <Label>
                                        {field.label}
                                        <br/>
                                        <Input
                                            key={field.control}
                                            name={field.control}
                                            {...field}
                                        >
                                        </Input>
                                    </Label>
                                </FormGroup>
                            ))}
                            <Button>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    };
}

const mapStateToProps = state => {
    const {animal, loading} = state.animal.documents;
    const fields = map(fieldsData, field => ({
        ...field,
        value: get(state.animal.documents.animal, field.path, '')
    }));
    return {
        fields,
        animal,
        loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        getAnimal: () => dispatch(fetchAnimalRequested(id)),
        updateAnimal: car => dispatch(updateAnimalData(car)),
        submitAnimal: () => dispatch(submitAnimalRequested())
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const megedFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => dispatchProps.updateAnimal(set(
            stateProps.animal, field.path, value
        ))
    }));

    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        fields: megedFields
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Edit); 
