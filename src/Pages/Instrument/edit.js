import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    fetchInstrumentRequested, // fetch One, para edicion <<<
    submitInstrumentRequested, // Sagas / Api Action <<< 
    updateInstrumentData // Only Reducers <<< 
} from '../../actions/instrument'

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
        control: 'hexcode',
        label: 'Código Hex',
        path: 'hexcode',
        value: null,
        type: 'text'
    },
    {
        control: 'family',
        label: 'Familia',
        path: 'family',
        value: null,
        type: 'text'
    },
    {
        control: 'instrument',
        label: 'Instrument',
        path: 'instrument',
        value: null,
        type: 'text'
    }
];

class Edit extends PureComponent {
    /*componentDidMount() se invoca inmediatamente después de que un componente se monte.*/
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getInstrument();
        }
    }

    handleSubmit(event) {//es una funcio reservada?//handle se usa en funciones referidas a eventos?

        event.preventDefault();//en React no puedes retornar false 
                            //para prevenir el comportamiento por defecto. 
                            //Debes, explícitamente, llamar preventDefault.
        this.props.submitInstrument()
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
    const {instrument, loading} = state.instrument.documents;
    const fields = map(fieldsData, field => ({
        ...field,
        value: get(state.instrument.documents.instrument, field.path, '')
    }));
    return {
        fields,
        instrument,
        loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        getInstrument: () => dispatch(fetchInstrumentRequested(id)),
        updateInstrument: car => dispatch(updateInstrumentData(car)),
        submitInstrument: () => dispatch(submitInstrumentRequested())
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const megedFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => dispatchProps.updateInstrument(set(
            stateProps.instrument, field.path, value
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