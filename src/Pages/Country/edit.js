import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    fetchCountryRequested, // fetch One, para edicion <<<
    submitCountryRequested, // Sagas / Api Action <<< 
    updateCountryData // Only Reducers <<< 
} from '../../actions/country'

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
        control: 'name',
        label: 'Nombre',
        path: 'name',
        value: null,
        type: 'text'
    },
    {
        control: 'code',
        label: 'Código',
        path: 'code',
        value: null,
        type: 'text'
    },
    {
        control: 'iso2',
        label: 'ISO2',
        path: 'iso2',
        value: null,
        type: 'text'
    }
];

class Edit extends PureComponent {
    /*componentDidMount() se invoca inmediatamente después de que un componente se monte.*/
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getCountry();
        }
    }

    handleSubmit(event) {//es una funcio reservada?//handle se usa en funciones referidas a eventos?

        event.preventDefault();//en React no puedes retornar false 
                            //para prevenir el comportamiento por defecto. 
                            //Debes, explícitamente, llamar preventDefault.
        this.props.submitCountry()
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
    const {country, loading} = state.country.documents;
    const fields = map(fieldsData, field => ({
        ...field,
        value: get(state.country.documents.country, field.path, '')
    }));
    return {
        fields,
        country,
        loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        getCountry: () => dispatch(fetchCountryRequested(id)),
        updateCountry: country => dispatch(updateCountryData(country)),
        submitCountry: () => dispatch(submitCountryRequested())
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const megedFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => dispatchProps.updateCountry(set(
            stateProps.country, field.path, value
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