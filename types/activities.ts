import { filtersActivites } from "@/constant";

export type ActivityItem = { id: number; name: string };

export type Activity = {
  project?: ActivityItem;
  employee?: ActivityItem;
  date?: string;
  hours: number;
};

export type Activities = Activity[];

export type FilterActivities = (typeof filtersActivites)[number][];
