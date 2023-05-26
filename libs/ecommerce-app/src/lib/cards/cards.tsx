import styled from 'styled-components';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import { ADD } from '../action/action';
import Cardsdata from '../cardsdata/CardsData';
import {
 
  Styled_pagination
} from './cards.styles';
import { Itemdata } from '../Interfaces/Itemdata.interface'

import './cards.css'
import 'react-toastify/dist/ReactToastify.css';


export function Cards() {
  const dispatch = useDispatch();

  const send = (e:  Itemdata) => {
    dispatch(ADD(e));
    toast('Item has been added in the cart!'); 
  };

  const [pageNumber, setPageNumber] = useState<number>(0);

  const usersPerPage: number = 10;
  const pagesVisited: number = pageNumber * usersPerPage;
  const displayUsers = Cardsdata.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((res, id) => {
    return (
      <div>
        <div>
          <Card
            key={id}
            style={{
              width: "22rem",
              border: "none",
            }}
            className="mx-2 mt-4 card_style"
          >
            <Card.Img
              variant="top"
              src={res.imgdata}
              style={{ height: "16rem" }}
              className="mt-3"
            />
            <Card.Body>
              <Card.Title>{res.rname}</Card.Title>
              <Card.Text>{res.somedata}</Card.Text>
              <Button variant="primary" onClick={() => send(res)}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  });

  const pageCount = Math.ceil(Cardsdata.length / usersPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Styled_pagination>{displayUsers}</Styled_pagination>
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default Cards;
