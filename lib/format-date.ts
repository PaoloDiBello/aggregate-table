/**
 *
 * @returns string - Example: "27 Aug 2021"
 */

export const formatDate = (d: string) => {
  const date = new Date(d);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const formattedDay = day.toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${formattedDay} ${month} ${year}`;
};
