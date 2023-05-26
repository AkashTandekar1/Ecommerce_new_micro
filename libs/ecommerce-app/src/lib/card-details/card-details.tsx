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
  StyledIteamsdetails,
  Styled_items_img,
  Styled_items_img_image,
  Styled_details,
  Styled_Action_button,
} from './card-details.styles';
import { Itemdata } from '../Interfaces/Itemdata.interface';

export const CardDetails = () => {
  const [data, setData] = useState<Itemdata[]>();

  const { id } = useParams();
  console.log('dgdfg' + id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata: Itemdata[] = useSelector(
    (state: any) => state.CartReducer.carts
  );

  const compare = () => {
    let comparedata: Itemdata[] = getdata.filter((e: any) => {
      return e.id == id;
    });

    console.log('in nx console' + comparedata);
    setData(comparedata);
  };

  const send = (e: Itemdata) => {
    dispatch(ADD(e));
    toast('Item has been added in the cart!');
  };

  const dlt = (id: number) => {
    dispatch(DLT(id));
    toast('Item Deleted!');
    history('/');
  };

  const remove = (item: Itemdata) => {
    dispatch(REMOVE(item));
    toast('Item Deleted!');
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>

      <section className="container mt-3">
        <StyledIteamsdetails>
          {data?.map((ele) => {
            return (
              <>
                <Styled_items_img>
                  <Styled_items_img_image
                    src={ele.imgdata}
                    alt=""
                  ></Styled_items_img_image>
                </Styled_items_img>

                <Styled_details>
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
                        <Styled_Action_button className="mt-5 d-flex justify-content-between align-items-center"></Styled_Action_button>
                        <div
                          className="mt-5 d-flex justify-content-between align-items-center"
                          style={{
                            width: 100,
                            cursor: 'pointer',
                            background: '#ddd',
                            color: '#111',
                          }}
                        >
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
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating :</strong>{' '}
                          <span
                            style={{
                              background: 'green',
                              color: '#fff',
                              padding: '2px 5px',
                              borderRadius: '5px',
                            }}
                          >
                            {ele.rating} ★{' '}
                          </span>
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
                </Styled_details>
              </>
            );
          })}
        </StyledIteamsdetails>
      </section>
    </div>
  );
};

export default CardDetails;
