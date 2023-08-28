"use client";
import DataTable from "@/components/data-table";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { activitiesToDataGrid } from "@/lib/map-data-grid";
import React, { useState } from "react";
import { filtersActivites } from "@/constant";
import { Activities, FilterActivities } from "@/types/activities";
import { aggregateData } from "@/lib/aggregate";
import { Card, CardContent, Stack } from "@mui/material";

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
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid xs={12} sm={6} lg={3} item>
          <Paper>
            <Stack
              alignItems="flex-start"
              direction="column"
              justifyContent="space-between"
            >
              <Typography variant="h3" gutterBottom>
                Activities
              </Typography>
              <Stack direction="row" columnGap={1} rowGap={1}>
                {filtersActivites.map((filter: FilterActivities[number]) => (
                  <Chip
                    key={filter}
                    label={filter.toUpperCase()}
                    onClick={() => handleClick(filter)}
                    variant={
                      selectedFields.includes(filter) ? "filled" : "outlined"
                    }
                    color={
                      selectedFields.includes(filter) ? "primary" : "default"
                    }
                  />
                ))}
              </Stack>
            </Stack>

            <DataTable {...data} />
          </Paper>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TableContainer;
