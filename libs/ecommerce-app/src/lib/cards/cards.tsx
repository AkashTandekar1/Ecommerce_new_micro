import styled from 'styled-components';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import { ADD } from '../action/action';
import Cardsdata from '../cardsdata/CardsData';


import 'react-toastify/dist/ReactToastify.css';

export interface CardsProps {
  id: number;
  rname: string;
  imgdata: string;
  address: string;
  delimg: string;
  somedata: string;
  price: number;
  rating: string;
  arrimg: string;
  qnty: number;
}

const StyledCards = styled.div``;

const StyleShowCards = styled.div``;
const StyleShowCardsChildren = styled.div``;

const Styledpagination = styled.div``;

const StyledReactPaginate = styled.div``;
export function Cards() {
  const dispatch = useDispatch();

  const send = (e: CardsProps) => {
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
      <StyleShowCards>
        <StyleShowCardsChildren>
          <Card
            key={id}
            style={{
              width: '22rem',
              border: 'none',
            }}
            className="mx-2 mt-4 card_style"
          >
            <Card.Img
              variant="top"
              src={res.imgdata}
              style={{ height: '16rem' }}
              className="mt-3"
            />
            <Card.Body>
              <Card.Title>{res.rname}</Card.Title>
              <Card.Text>{res.somedata}</Card.Text>
              <Button variant="primary" data-testid="custom-element" onClick={() => send(res)}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </StyleShowCardsChildren>
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
      </StyleShowCards>
    );
  });

  const pageCount = Math.ceil(Cardsdata.length / usersPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <StyledCards>
      <Styledpagination className="pagination">{displayUsers}</Styledpagination>

      <StyledReactPaginate>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
         
        />
      </StyledReactPaginate>
    </StyledCards>
  );
}

export default Cards;
