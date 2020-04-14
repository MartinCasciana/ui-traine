import React from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import { Link } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import Table from 'reactstrap/lib/Table';
import {
    Container,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    ButtonGroup
} from 'reactstrap';

import times from 'lodash/times';
import ceil from 'lodash/ceil';
import toNumber from 'lodash/toNumber';

export default ({ data, columns, headers, onSort, limit, total, onPageClick, onDelete, currentPage, linkTo }) => (
    <Container fluid>
        <Row>
            <Col>
                <Table bordered size="sm" hovered dark>
                    <thead> 
                        <tr>
                            {map(headers, header => (
                                <th onClick={() => onSort(header)}>

                                    {header.label}
                                    {header.sort === 'desc' && (<i className="fas fa-angle-up float-right" />)}
                                    {header.sort !== 'desc' && (<i className="fas fa-angle-down float-right" />)}

                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {map(data, d => (
                            <tr key={d.id} className={d.deleted ? "bg-danger" : ""}>
                                {map(columns, column => {
                                    if (column === 'actions') {
                                        return (
                                        <td>
                                            <ButtonGroup>
                                            <Button tag={Link} color="primary" to={`${linkTo}/edit/${d.code}`}> Edición  </Button>
                                            <Button color="danger" onClick={() => onDelete (d)}> Eliminar </Button>
                                            </ButtonGroup>
                                        </td>);
                                    }
                                    return (<td>{get(d, column)}</td>);
                                })}
                            </tr>
                      ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={columns.length}>
                                <Pagination aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink first onClick={() => onPageClick(0)} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink previous onClick={() => onPageClick(currentPage - 1)} />
                                    </PaginationItem>
                                    {times(ceil(total / toNumber(limit)), it => (
                                        <PaginationItem>
                                            <PaginationLink onClick={() => onPageClick(it)}>
                                                {it + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                    <PaginationItem>
                                        <PaginationLink next onClick={() => onPageClick(currentPage + 1)} />
                                    </PaginationItem>
                                </Pagination>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </Col>
        </Row>
    </Container>
)