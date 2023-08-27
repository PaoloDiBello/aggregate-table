import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import React from "react";

type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

const DataTable = ({ rows, columns }: DataTableProps) => {
  return (
    <div
      style={{
        marginTop: 5,
        height: "500",
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={() => Math.random()}
        pageSizeOptions={[5, 10]}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
        disableEval
        disableRowSelectionOnClick
        disableVirtualization
      />
    </div>
  );
};

export default DataTable;
