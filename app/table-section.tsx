"use server";
import { fetchActivities } from "@/lib/actions";
import React from "react";
import TableContainer from "./table-container";

const TableSection = async () => {
  const activities = await fetchActivities();
  return <TableContainer activities={activities} />;
};

export default TableSection;
