import {
  Activities,
  Activity,
  ActivityItem,
  FilterActivities,
} from "@/types/activities";

export const aggregateData = (
  activities: Activities = [],
  filterKeys: FilterActivities = []
): Activities => {
  if (
    !filterKeys.length ||
    !activities.length ||
    filterKeys.length === Object.keys(activities[0]).length - 1
  ) {
    return activities;
  }

  return activities
    .reduce((accumulator: Activities, currentActivity) => {
      const existingActivityIndex = accumulator.findIndex(
        ({ hours, ...existingActivity }) =>
          filterKeys.every((property) => {
            const currentValue = currentActivity[property];
            const existingValue = existingActivity[property];

            if (
              existingValue &&
              typeof existingValue !== "string" &&
              typeof currentValue !== "string"
            ) {
              return existingValue.id === currentValue?.id;
            } else {
              if (
                typeof existingValue === "string" &&
                typeof currentValue === "string"
              ) {
                return (
                  new Date(existingValue).getTime() ===
                  new Date(currentValue).getTime()
                );
              }
            }
            return false;
          })
      );

      if (existingActivityIndex !== -1) {
        accumulator[existingActivityIndex].hours += currentActivity.hours;
      } else {
        const newActivity: Activity = {
          hours: currentActivity.hours,
        };

        filterKeys.forEach((key) => {
          newActivity[key] = currentActivity[key] as
            | (ActivityItem & string)
            | undefined;
        });

        accumulator.push(newActivity);
      }

      return accumulator;
    }, [])
    .sort((a, b) => {
      const firstKey = filterKeys[0];
      const firstActivityItem = a[firstKey];
      const secondActivityItem = b[firstKey];

      if (
        firstActivityItem &&
        secondActivityItem &&
        typeof firstActivityItem !== "string" &&
        typeof secondActivityItem !== "string"
      ) {
        return firstActivityItem.id - secondActivityItem.id;
      }

      return 0;
    });
};
