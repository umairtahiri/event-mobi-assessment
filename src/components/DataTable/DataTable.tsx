import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";

import { TableContainer } from "./styles";

type DataTablePropTypes = {
  columns: GridColDef[];
  rows: any[];
  loading: boolean;
  onPaginationChange: (page: number, pageSize: number) => void;
  handleRowClick: (id: GridRowId) => void;
  pagination: {
    count: number;
    per_page: number;
    page: number;
  };
};

const DataTable = ({
  columns,
  rows,
  pagination,
  loading,
  handleRowClick,
  onPaginationChange,
}: DataTablePropTypes) => {
  const { count } = pagination;
  return (
    <TableContainer>
      <DataGrid
        data-testid="data-table"
        rows={rows}
        columns={columns}
        disableColumnSelector={false}
        paginationMode="server"
        sortingMode="server"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        onRowClick={(params) => handleRowClick(params?.id)}
        loading={loading}
        rowCount={count}
        hideFooterSelectedRowCount={true}
        onPaginationModelChange={({ page, pageSize }) =>
          onPaginationChange(page, pageSize)
        }
        pageSizeOptions={[10, 20, 50]}
      />
    </TableContainer>
  );
};

export default DataTable;
