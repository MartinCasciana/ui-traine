import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Container,
    Button,
    Row,
    Col,
    Spinner,
    ButtonGroup,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody
} from 'reactstrap';

import {
    fetchAnimalsRequested,
    sortAnimal,
    deleteAnimalRequested
} from '../../actions/animal'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: null
        };
    }
    componentDidMount() {
        this.props.getAnimals();
    }

    handlePagination = (skip) => {
        this.props.getAnimals({skip});
    }

    render() {
        const {
            animals,
            limit,
            total,
            tableProps,
            onSort,
            loading
        } = this.props;

        const {modal} = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Tabla de datos </h3>
                    </Col>
                    <Col sm="3">
                        <Button color="primary" tag={Link} to="/animals/edit/new"> Nuevo </Button>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        {loading && (
                            <Spinner color="danger" />
                        )}
                        {!loading && (
                            <Table {...{
                                data: animals,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                onDelete: modal => this.setState({modal}),
                                linkTo: 'animals'
                            }}/>
                        )}
                    </Col>
                </Row>
                {modal && (
                    <Modal isOpen>
                        <ModalHeader>
                            Te voy a borrar
                        </ModalHeader>
                        <ModalBody>
                            Confirme Accion {modal.animal} {modal.scientific_name} {modal.gender}
                        </ModalBody>
                        <ModalFooter>
                            <ButtonGroup>
                                <Button color="warning" onClick={() => {
                                    this.props.deleteAnimal(modal.id)
                                    this.setState({modal: null})
                                }} >
                                    Aceptar
                                </Button>
                                <Button color="info" onClick={() => this.setState({modal: null})}>
                                    Cancelar
                                </Button>
                            </ButtonGroup>
                        </ModalFooter>
                    </Modal>
                )}
            </Container>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {animals, limit, total, loading}, tableProps} = state.animals;
    return {
        tableProps,
        animals,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getAnimals: filters => dispatch(fetchAnimalsRequested(filters)),
    onSort: sort => dispatch(sortAnimal(sort)),
    deleteAnimal: id => dispatch(deleteAnimalRequested(id))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);