import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { ADD, DLT, REMOVE } from '../action/action';

import {
  StyledCardDetails,
  StyledDelete_Img,
  StyledIteamsdetails,
  StyledRating_star,
  StyledTable_details,
  Styleditems_image,
  Styleditems_img
} from './card-details.styles';

export interface CardDetailsProps {
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

export interface akash {
  id: number;
}

export const CardDetails = (props: CardDetailsProps) => {
  const [data, setData] = useState<CardDetailsProps[]>();

  const { id }= useParams();
  console.log('dgdfg' + id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata: CardDetailsProps[] = useSelector(
    (state:any) => state.CartReducer.carts
  );

  const compare = () => {
    let comparedata:CardDetailsProps[] = getdata.filter((e:any) => {
      return e.id == id;
    });

    console.log('in nx console' + comparedata);
    setData(comparedata);
  };

  const send = (e: CardDetailsProps) => {
    dispatch(ADD(e));
    toast('Item has been added in the cart!');
  };

  const dlt = (id: number) => {
    dispatch(DLT(id));
    toast('Item Deleted!');
    history('/');
  };

  const remove = (item: CardDetailsProps) => {
    dispatch(REMOVE(item));
    toast('Item Deleted!');
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <StyledCardDetails>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <StyledIteamsdetails>
            {data?.map((ele) => {
              return (
                <>
                  <Styleditems_img>
                    <Styleditems_image
                      src={ele.imgdata}
                      alt=""
                    ></Styleditems_image>
                  </Styleditems_img>
                    
                  <StyledTable_details>
                    <Table>
                      <tr>
                        <td>
                          <p>
                            {' '}
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            {' '}
                            <strong>Price</strong> : ₹{ele.price}
                          </p>
                          <p>
                            {' '}
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            {' '}
                            <strong>Total</strong> :₹ {ele.price * ele.qnty}
                          </p>
                          <StyledDelete_Img className="mt-5 d-flex justify-content-between align-items-center">
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </StyledDelete_Img>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{' '}
                            <StyledRating_star>
                              {ele.rating} ★{' '}
                            </StyledRating_star>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{' '}
                            <span>{ele.somedata} </span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{' '}
                            <span>
                              <i
                                className="fas fa-trash"
                                onClick={() => dlt(ele.id)}
                                style={{
                                  color: 'red',
                                  fontSize: 20,
                                  cursor: 'pointer',
                                }}
                              ></i>{' '}
                            </span>
                          </p>
                        </td>
                      </tr>
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
                    </Table>
                  </StyledTable_details>
                </>
              );
            })}
          </StyledIteamsdetails>
        </section>
      </div>
    </StyledCardDetails>
  );
};

export default CardDetails;
