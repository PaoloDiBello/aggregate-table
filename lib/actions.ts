import { GET } from "@/app/api/activities/route";

export const fetchActivities = async () => {
  try {
    const response = await GET();
    return response.json();
  } catch (err) {
    throw err;
  }
};
