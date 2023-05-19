import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { StyledInvoiceContainer,StyledPrintContainer,StyledInvoiceBoxContainer,StyledTableContainer,
  StyledTableData }
 from './invoice.styles'

export interface InvoiceProps {
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

export default function Invoice() {
  let componentRef:any = useRef();
  const getdata = useSelector((state:any) => state.CartReducer.carts);
  console.log(getdata);

  const [price, setPrice] = useState<number>(0);

  const total = () => {
    let price = 0;
    getdata.map((ele:InvoiceProps) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
     <StyledInvoiceContainer>
          <StyledPrintContainer>
        {/* <ReactToPrint
          trigger={() => <Button>Click here to Print !</Button>}
          content={() => componentRef}
        /> */}
         <ReactToPrint
          trigger={() => <Button>Click here to Print !</Button>}
          content={() => componentRef}
        />
          </StyledPrintContainer>

     <StyledInvoiceBoxContainer ref={(el) => (componentRef = el)}>
        <StyledTableContainer cellPadding="0" cellSpacing="0">
          <tr className="top">
           <StyledTableData colSpan={2}>
              <table>
                <tr>
                  <td className="title">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6Zvk_Jqb4jjxUPMjZUBaIMGDIEqsKmGcw&usqp=CAU"
                      style={{ width: "100%", maxWidth: "300px" }}
                    />
                  </td>

                  <td>
                    Invoice #: 123
                    <br />
                    Created: May 5, 2023
                    <br />
                  </td>
                </tr>
              </table>
              </StyledTableData>
          </tr>

          <tr className="information">
            <td colSpan={2}>
              <table>
                <tr>
                  <td>
                    <strong>Billing Address</strong>
                    <br />
                    Hinjewadi
                    <br />
                    Pune MH 12345
                  </td>

                  <td>
                    Akash Tandekar
                    <br />
                    akash@gmail.com
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className="heading">
            <td>Items </td> <td>Price</td>
          </tr>

          {getdata.map((res:InvoiceProps) => (
            <div>
              <tr className="item last">
                <td>{res.rname}</td>
                <td>${res.price}</td>
              </tr>
            </div>
          ))}

          <tr className="total">
            <td></td>
            <td>Total: {price}</td>
          </tr>
          </StyledTableContainer>
     </StyledInvoiceBoxContainer>
      </StyledInvoiceContainer>
  );
}
