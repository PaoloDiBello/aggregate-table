import { aggregateData } from "@/lib/aggregate";
import { FilterActivities } from "@/types/activities";
import { expect, it } from "vitest";

const testInput = [
  {
    project: { id: 1, name: "Mars Rover" },
    employee: { id: 1, name: "Mario" },
    date: "2021-08-26T22:00:00.000Z",
    hours: 5,
  },
  {
    project: { id: 2, name: "Manhattan" },
    employee: { id: 2, name: "Giovanni" },
    date: "2021-08-30T22:00:00.000Z",
    hours: 3,
  },
  {
    project: { id: 1, name: "Mars Rover" },
    employee: { id: 1, name: "Mario" },
    date: "2021-08-31T22:00:00.000Z",
    hours: 3,
  },
  {
    project: { id: 1, name: "Mars Rover" },
    employee: { id: 3, name: "Lucia" },
    date: "2021-08-31T22:00:00.000Z",
    hours: 3,
  },
  {
    project: { id: 2, name: "Manhattan" },
    employee: { id: 1, name: "Mario" },
    date: "2021-08-26T22:00:00.000Z",
    hours: 2,
  },
  {
    project: { id: 2, name: "Manhattan" },
    employee: { id: 2, name: "Giovanni" },
    date: "2021-08-31T22:00:00.000Z",
    hours: 4,
  },
];

const ProjectExpectedOutput = [
  {
    project: { id: 1, name: "Mars Rover" },
    hours: 11,
  },
  {
    project: { id: 2, name: "Manhattan" },
    hours: 9,
  },
];

const ProjectEmployeeExpectedOutput = [
  {
    project: { id: 1, name: "Mars Rover" },
    employee: { id: 1, name: "Mario" },
    hours: 8,
  },
  {
    project: { id: 1, name: "Mars Rover" },
    employee: { id: 3, name: "Lucia" },
    hours: 3,
  },
  {
    project: { id: 2, name: "Manhattan" },
    employee: { id: 2, name: "Giovanni" },
    hours: 7,
  },
  {
    project: { id: 2, name: "Manhattan" },
    employee: { id: 1, name: "Mario" },
    hours: 2,
  },
];

const EmployeeProjectExpectedOutput = [
  {
    employee: { id: 1, name: "Mario" },
    project: { id: 1, name: "Mars Rover" },
    hours: 8,
  },
  {
    employee: { id: 1, name: "Mario" },
    project: { id: 2, name: "Manhattan" },
    hours: 2,
  },
  {
    project: { id: 2, name: "Manhattan" },
    employee: { id: 2, name: "Giovanni" },
    hours: 7,
  },
  {
    project: { id: 1, name: "Mars Rover" },
    employee: { id: 3, name: "Lucia" },
    hours: 3,
  },
];

let selectedFields: FilterActivities = [];
let selectedFields2: FilterActivities = [];

it("aggregate function shouldn't aggregate when no parameters", () => {
  selectedFields = [];
  const result = aggregateData(testInput, selectedFields);
  expect(result).toEqual(testInput);
});

it("aggregate function shouldn't aggregate with all parameters selected", () => {
  selectedFields = ["project", "employee", "date"];
  const result = aggregateData(testInput, selectedFields);
  expect(result).toEqual(testInput);
  selectedFields2 = ["employee", "project", "date"];
  const result2 = aggregateData(testInput, selectedFields2);
  expect(result2).toEqual(testInput);
});

it("aggregate function should aggregate projects correctly", () => {
  selectedFields = ["project"];
  const result = aggregateData(testInput, selectedFields);
  expect(result).toEqual(ProjectExpectedOutput);
});

it("aggregate function should aggregate project and employee together correctly", () => {
  selectedFields = ["project", "employee"];
  const result = aggregateData(testInput, selectedFields);

  expect(result).toEqual(ProjectEmployeeExpectedOutput);
});

it("aggregate function should aggregate employee and project together correctly", () => {
  selectedFields = ["employee", "project"];
  const result = aggregateData(testInput, selectedFields);
  expect(result).toEqual(EmployeeProjectExpectedOutput);
});
