import { Activities, FilterActivities } from "@/types/activities";
import {
  GridRowsProp,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { formatDate } from "@/lib/format-date";

type ReturnActivitiesToDataGrid = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

const allColumns = {
  project: {
    field: "project",
    headerName: "Project",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => params.row.project.name,
  },
  employee: {
    field: "employee",
    headerName: "Employee",
    width: 150,
    valueGetter: (params: GridValueGetterParams) => params.row.employee.name,
  },
  date: {
    field: "date",
    headerName: "Date",
    width: 180,
    valueGetter: (params: GridValueGetterParams) => formatDate(params.row.date),
  },
  hours: {
    field: "hours",
    headerName: "Hours",
    width: 100,
  },
};

export const activitiesToDataGrid = (
  activities: Activities,
  selectedFields: FilterActivities
): ReturnActivitiesToDataGrid => {
  const rows: GridRowsProp = activities;
  const columns: GridColDef[] = selectedFields.map(
    (field) => allColumns[field]
  );
  columns.push(allColumns["hours"]);
  return {
    rows,
    columns,
  };
};
