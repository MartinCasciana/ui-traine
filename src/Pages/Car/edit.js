import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    fetchCarRequested, // fetch One, para edicion <<<
    submitCarRequested, // Sagas / Api Action <<< 
    updateCarData // Only Reducers <<< 
} from '../../actions/car'

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
        control: 'brand',
        label: 'Nombre',
        path: 'brand',
        value: null,
        type: 'text'
    },
    {
        control: 'model',
        label: 'Modelo',
        path: 'model',
        value: null,
        type: 'text'
    },
    {
        control: 'year',
        label: 'Año',
        path: 'year',
        value: null,
        type: 'number'
    }
];

class Edit extends PureComponent {
    /*componentDidMount() se invoca inmediatamente después de que un componente se monte.*/
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getCar();
        }
    }

    handleSubmit(event) {//es una funcio reservada?//handle se usa en funciones referidas a eventos?

        event.preventDefault();//en React no puedes retornar false 
                            //para prevenir el comportamiento por defecto. 
                            //Debes, explícitamente, llamar preventDefault.
        this.props.submitCar()
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
    const {car, loading} = state.car.documents;
    const fields = map(fieldsData, field => ({
        ...field,
        value: get(state.car.documents.car, field.path, '')
    }));
    return {
        fields,
        car,
        loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        getCar: () => dispatch(fetchCarRequested(id)),
        updateCar: car => dispatch(updateCarData(car)),
        submitCar: () => dispatch(submitCarRequested())
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const megedFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => dispatchProps.updateCar(set(
            stateProps.car, field.path, value
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