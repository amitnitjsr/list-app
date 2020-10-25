import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { crudAction } from "../../store/actions/common";
import { Badge, Card, CardBody, Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { MOVIES_URL } from '../../shared/allApiUrl';
import { getImageUrl } from '../../shared/helpers';
import { withRouter } from 'react-router-dom';
import InputUI from '../../UI/InputUI';
import moment from 'moment';
import { useForm } from "react-hook-form";
import './style.css';

function UserList(props) {
    const initialFields = {
        search: ''
      }
  const [fields, setFields] = useState(initialFields);
  const [selected, setSelected] = useState('');
  const { handleSubmit, register, errors } = useForm();

    // const[search, setSearch] = useState('');
    const getUserList = () => {
        props.crudActionCall(MOVIES_URL, null, "GET_ALL");
    }
    useEffect(() => {
        getUserList();
        return () => {
            // cleanup
        }
    }, []);

    useEffect(() => {
        const { type, isSuccess } = props.movies.action;
        if (type === "DELETE" && isSuccess)
            getUserList();
    }, [props.movies]);

    const navToEditPage = (movieId) => {
        console.log('id', movieId)
        props.history.push(`/movies/edit/${movieId}`);
    }
    const navToViewPage = (movieId) => {
        props.history.push(`/movies/details/${movieId}`);
    }
    const deleteUser = (movieId) => {
        props.crudActionCall(`${MOVIES_URL}/${movieId}`, null, "DELETE");
    }
    const checkOutHandler =()=>{
        // props.history.push(`/movies/cart`);
    }
    const sortHandler=(value)=>{
            setSelected(value);
    }
    const clearFilterHandler =()=>{
        setSelected('');
    }
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                    <Row class="row justify-content-md-center" >
                        <Col className="col-3">
                        <InputUI
                            name="search"
                            placeholder="Search here..."
                            type="search"
                            errors={errors}
                            innerRef={register({
                                required: 'This is required field',
                            })}
                            fields={fields}
                            style={{ marginLeft: '2%'}}
                            />
                        </Col>
                        <Col className="col-8" style={{marginTop:'2rem'}}>
                                <span className="sort-by">Sort By : </span>&nbsp;
                                <span type="button" className={selected === 'pltoh' ? 'selected' : ''} onClick={()=>sortHandler('pltoh')}>Price-- Low to High</span>&nbsp;
                                <span type="button" className={selected === 'phtol' ? 'selected' : ''} onClick={()=>sortHandler('phtol')} >Price-- High to Low</span>&nbsp;
                                <span type="button" className={selected === 'rltoh' ? 'selected' : ''} onClick={()=>sortHandler('rltoh')} >Rating-- Low to High</span>&nbsp;
                                <span type="button" className={selected === 'rhtol' ? 'selected' : ''} onClick={()=>sortHandler('rhtol')} >Rating-- High to Low</span>&nbsp;
                                <span type="button" onClick={clearFilterHandler}>Clear Filter</span>
                        </Col>
                        <Col class="col-1" onClick={checkOutHandler} style={{marginTop: '1rem'}}>
                            <div className="cart-icon">
                            <svg width="2em" height="1.8em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                            <span class="badge badge-danger" >200</span>
                            </div>
                        </Col>
                    </Row>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Medicine List
                        </CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Unit</th>
                                        <th>User Rating</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.movies && props.movies.moviesList && props.movies.moviesList.length > 0 ?
                                        props.movies.moviesList.map((val) => {
                                            return (
                                                <tr>
                                                    <td class="text-center">
                                                        <div class="avatar">
                                                            <img
                                                                src={getImageUrl(val.image)}
                                                                // src={'http://111.93.169.90:4020/image/user.png'}
                                                                // scr={val.poster}
                                                                class="img-avatar"
                                                                alt="not found"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>{val.name}</td>
                                                    <td>{val.director}</td>
                                                    <td>{val.genre}</td>
                                                    <td>
                                                        <Badge color="success">{val.popularity}</Badge>
                                                    </td>
                                                    <td>{val.imdb_score}</td>
                                                    <td class="text-center">
                                                        <Button size="sm" className="btn-xing btn-brand mr-1 mb-1" data-toggle="tooltip" title="View" onClick={() => navToViewPage(123)}>
                                                            <i className="fa fa-eye"></i>
                                                        </Button>
                                                        <Button size="sm" className="btn-twitter btn-brand mr-1 mb-1" data-toggle="tooltip" title="Edit" onClick={() => navToEditPage(val.id)}>
                                                            <i className="fa fa-pencil-square-o"></i>
                                                        </Button>
                                                        <Button size="sm" className="btn-youtube btn-brand mr-1 mb-1" data-toggle="tooltip" title="Delete" onClick={() => { if (window.confirm('Are you sure you want to delete this user?')) { deleteUser(val.id) } }}>
                                                            <i className="fa fa-trash-o"></i>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                        : null}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = state => {
    const { movies } = state;
    console.log('movieList', movies, state)
    return {
        movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        crudActionCall: (url, data, actionType) => dispatch(crudAction(url, data, actionType, "MOVIES"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserList));