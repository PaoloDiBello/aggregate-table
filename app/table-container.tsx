"use client";
import DataTable from "@/components/data-table";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { activitiesToDataGrid } from "@/lib/map-data-grid";
import React, { useState } from "react";
import { filtersActivites } from "@/constant";
import { Activities, FilterActivities } from "@/types/activities";
import { aggregateData } from "@/lib/aggregate";

const TableContainer = ({ activities }: { activities: Activities }) => {
  const [selectedFields, setSelectedFields] = useState<FilterActivities>([]);
  console.log("selectedFields", selectedFields);
  const data2 = aggregateData(
    activities,
    selectedFields.length
      ? selectedFields
      : (filtersActivites as unknown as FilterActivities)
  );
  const data = activitiesToDataGrid(
    data2,
    selectedFields.length
      ? selectedFields
      : (filtersActivites as unknown as FilterActivities)
  );
  console.log("data", data);

  const handleClick = (filter: FilterActivities[number]) => {
    if (selectedFields.includes(filter)) {
      setSelectedFields(
        selectedFields.filter((selectedFilter) => selectedFilter !== filter)
      );
    } else {
      setSelectedFields([...selectedFields, filter]);
    }
  };

  return (
    <section>
      <Paper>
        {filtersActivites.map((filter: FilterActivities[number]) => (
          <Chip
            key={filter}
            label={filter}
            onClick={() => handleClick(filter)}
            variant={selectedFields.includes(filter) ? "filled" : "outlined"}
            color={selectedFields.includes(filter) ? "primary" : "default"}
          />
        ))}
        <DataTable {...data} />
      </Paper>
    </section>
  );
};

export default TableContainer;
