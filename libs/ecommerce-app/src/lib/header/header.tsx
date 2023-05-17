import Badge from '@mui/material/Badge';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import zIndex from '@mui/material/styles/zIndex';
import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/esm/Table';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { DLT } from '../action/action';
import Paymentgateway from '../payment-gateway/payment-gateway';

export interface HeaderProps {
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

const StyledHeader = styled.div``;

const StyledHeaderTable = styled.div`
  width: 24rem;
  padding: 10;
  z-index: 999 !important;
`;

export const Header = (props: HeaderProps) => {
  const getdata = useSelector((state:any) => state.CartReducer.carts);
  console.log(getdata);

  const [price, setPrice] = useState<number>(0);
  const dispatch = useDispatch();

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef?.current,
  });

  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef (null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event:any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: any) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = useRef<any>(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const dlt = (id: number) => {
    dispatch(DLT(id));
    toast('Item Deleted!');
  };

  const total = () => {
    let price: number = 0;
    getdata.map((ele: HeaderProps, k: number) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <StyledHeader>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shopping app</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3">
              Home
            </NavLink>

            <NavLink
              to="/invoice"
              className="text-decoration-none text-light mx-3"
            >
              Invoice
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getdata.length}
            color="primary"
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <i
              className="fa fa-shopping-cart text-light"
              style={{ fontSize: '25px', cursor: 'pointer' }}
              aria-hidden="true"
            ></i>
          </Badge>
        </Container>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              {getdata.length ? (
                <StyledHeaderTable>
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((e: HeaderProps) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink
                                  to={`/cartdetails/${e.id}`}
                                  onClick={handleClose}
                                >
                                  <img
                                    src={e.imgdata}
                                    style={{ width: '5rem', height: '5rem' }}
                                    alt=""
                                  />
                                </NavLink>
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price : ₹{e.price}</p>
                                <p>Quantity : {e.qnty}</p>
                                <p
                                  style={{
                                    color: 'red',
                                    fontSize: 20,
                                    cursor: 'pointer',
                                  }}
                                  onClick={() => dlt(e.id)}
                                >
                                  <i className="fas fa-trash smalltrash"></i>
                                </p>
                              </td>

                              <td
                                className="mt-5"
                                style={{
                                  color: 'red',
                                  fontSize: 20,
                                  cursor: 'pointer',
                                }}
                                onClick={() => dlt(e.id)}
                              >
                                <i className="fas fa-trash largetrash"></i>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      <p className="text-center">Total :₹ {price}</p>
                      <Paymentgateway id={''} object={''} card={{
                        address_city: undefined,
                        address_country: undefined,
                        address_line: undefined,
                        address_line1_check: undefined,
                        address_line2: null,
                        address_state: null,
                        address_zip: null,
                        address_zip_check: null,
                        brand: '',
                        country: '',
                        cvc_check: '',
                        dynamic_last4: null,
                        exp_month: 0,
                        exp_year: 0,
                        funding: '',
                        id: '',
                        last4: 0,
                        name: '',
                        object: '',
                        tokenization_method: null,
                        wallet: undefined
                      }} client_ip={''} created={0} email={''} livemode={false} type={''} used={false} />
                    </tbody>
                  </Table>
                </StyledHeaderTable>
              ) : (
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem>
                        your cart is empty{' '}
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{ margin: '5px' }}
                          onClick={handleClose}
                        ></i>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              )}
            </Grow>
          )}
        </Popper>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
