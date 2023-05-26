import styled from 'styled-components';

export const StyledInvoiceContainer = styled.div``;

export const StyledPrintContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px 20px;
`;

export const StyledInvoiceBoxContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  color: #555;
  position: relative;
  top: 20px;
`;

export const StyledTableContainer = styled.table`
  width: 100%;
  line-height: inherit;
  text-align: left;

  tr td:nth-child(2) {
    text-align: right;
  }


`;

export const StyledTableData = styled.td`
  padding: 5px;
  vertical-align: top;



  &tr.top table td {
    padding-bottom: 20px;
  }

  tr.top table td.title {
    font-size: 45px;
    line-height: 45px;
    color: red;
  }
`;

export const StyledTable_Information_Td = styled.td`
padding-bottom: 40px;



`;

export const StyledTable_Heading_Td = styled.td`
background: #eee;
border-bottom: 1px solid #ddd;
font-weight: bold;
`;

export const StyledTable_Item_Td = styled.td`
border-bottom: 1px solid #eee;
`;

export const StyledTable_Total_Tr = styled.tr`

td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}
`;




