import { GET } from "@/app/api/activities/route";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const fetchActivities = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/activities`);
    return response.json();
  } catch (err) {
    throw err;
  }
};
