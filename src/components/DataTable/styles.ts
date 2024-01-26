import styled from "styled-components";

export const TableContainer = styled.div`
  background: #fff;

  .MuiDataGrid-virtualScroller {
    max-height: calc(100vh - 340px);
    min-height: 300px;

    .MuiDataGrid-cell:focus {
      outline: none;
    }
  }
`;
