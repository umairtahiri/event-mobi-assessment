import { render, screen } from "@testing-library/react";
import DataTable from "../src/components/DataTable/DataTable";

const mockHandleRowClick = jest.fn();
const mockOnPaginationChange = jest.fn();

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
];

const rows = [
  { id: 1, name: "ABC" },
  { id: 2, name: "DEF" },
];

const pagination = {
  count: 100,
  per_page: 20,
  page: 0,
};

test("renders DataTable component", () => {
  render(
    <DataTable
      columns={columns}
      rows={rows}
      pagination={pagination}
      loading={false}
      handleRowClick={mockHandleRowClick}
      onPaginationChange={mockOnPaginationChange}
    />
  );

  const dataTableElement = screen.getByTestId("data-table");
  expect(dataTableElement).toBeInTheDocument();
});
