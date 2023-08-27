export const activities = [
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

export const filtersActivites = ["project", "employee", "date"] as const;
