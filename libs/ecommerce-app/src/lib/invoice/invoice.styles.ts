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
`;

export const StyledTableData = styled.td`
  padding: 5px;
  vertical-align: top;
`;
