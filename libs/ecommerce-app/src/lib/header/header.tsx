import styled from 'styled-components';
import Badge from "@mui/material/Badge";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/esm/Table";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useReactToPrint } from "react-to-print";
import zIndex from "@mui/material/styles/zIndex";
import { NavLink } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  
`;

export function Header(props: HeaderProps) {
  

  // const getdata = useSelector((state) => state.CartReducer.carts);
  console.log(getdata);

  const [price, setPrice] = useState(0);
  // const dispatch = useDispatch();

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    // content: () => componentRef.current,
  });

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
    //   anchorRef.current.focus();
    // }

    prevOpen.current = open;
  }, [open]);

  const dlt = (id) => {
    // dispatch(DLT(id));
    // toast("Item Deleted!");
  };

  const total = () => {
    // let price = 0;
    // getdata.map((ele, k) => {
    //   price = ele.price * ele.qnty + price;
    // });
    // setPrice(price);
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
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <i
              className="fa fa-shopping-cart text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
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
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              {getdata.length ? (
                <div
                  style={{ width: "24rem", padding: 10, zIndex: '999 !important'}}
                >
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((e) => {
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
                                    style={{ width: "5rem", height: "5rem" }}
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
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => dlt(e.id)}
                                >
                                  <i className="fas fa-trash smalltrash"></i>
                                </p>
                              </td>

                              <td
                                className="mt-5"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
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
                      <Paymentgateway />
                    </tbody>
                  </Table>
                </div>
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
                        your cart is empty{" "}
                        <i
                          className="fa fa-times"
                          aria-hidden="true"
                          style={{ margin: "5px" }}
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
}

export default Header;
