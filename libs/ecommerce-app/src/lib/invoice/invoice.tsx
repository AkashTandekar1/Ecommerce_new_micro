import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import { StyledInvoiceContainer,StyledPrintContainer,StyledInvoiceBoxContainer,StyledTableContainer,
  StyledTableData,StyledTable_Information_Td,StyledTable_Heading_Td,StyledTable_Item_Td,StyledTable_Total_Tr   }
 from './invoice.styles'
 import { Itemdata } from '../Interfaces/Itemdata.interface'


export default function Invoice() {
  let componentRef:any = useRef();
  const getdata = useSelector((state:any) => state.CartReducer.carts);
  console.log(getdata);

  const [price, setPrice] = useState<number>(0);

  const total = () => {
    let price = 0;
    getdata.map((ele:Itemdata) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <StyledPrintContainer>
        <ReactToPrint
          trigger={() => <Button>Click here to Print !</Button>}
          content={() => componentRef}
        />
    </ StyledPrintContainer>

      <StyledInvoiceBoxContainer ref={(el) => (componentRef = el)}>
      
      <StyledTableContainer cellPadding="0" cellSpacing="0">
      
          <tr className="top">
            <td colSpan={2}>
             <StyledTableContainer>
                <tr>
                  <StyledTableData className="title">
                 
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6Zvk_Jqb4jjxUPMjZUBaIMGDIEqsKmGcw&usqp=CAU"
                      style={{ width: "100%", maxWidth: "300px" }}
                    />
                 </StyledTableData>

                 <StyledTableData className="title">
                    Invoice #: 123
                    <br />
                    Created: May 5, 2023
                    <br />
                    </StyledTableData>
                </tr>
                </StyledTableContainer>
            </td>
          </tr>

          <tr className="information">
            <td colSpan={2}>
            <StyledTableContainer>
                <tr>
                 <StyledTable_Information_Td>
                    <strong>Billing Address</strong>
                    <br />
                    Hinjewadi
                    <br />
                    Pune MH 12345
                    </StyledTable_Information_Td>

                    <StyledTable_Information_Td>
                    Akash Tandekar
                    <br />
                    akash@gmail.com
                    </StyledTable_Information_Td>
                </tr>
                </StyledTableContainer>
            </td>
          </tr>

          <tr className="heading">
            <StyledTable_Heading_Td >
            Items
            </StyledTable_Heading_Td>
            <StyledTable_Heading_Td >
            Price
            </StyledTable_Heading_Td>
          
          </tr>

          {getdata.map((res:Itemdata) => (
            <div>
              <tr className="item last">
                <StyledTable_Item_Td>{res.rname}</StyledTable_Item_Td>
                <StyledTable_Item_Td>${res.price}</StyledTable_Item_Td>
              </tr>
            </div>
          ))}

           <StyledTable_Total_Tr>
            <td></td>
            <td>Total: {price}</td>
            </StyledTable_Total_Tr>
          </StyledTableContainer>
        </StyledInvoiceBoxContainer>
   </>
  );
}
