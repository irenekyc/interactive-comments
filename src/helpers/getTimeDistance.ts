import { formatDistanceToNow, differenceInCalendarWeeks } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const getTimeDistance = (date: string): string => {
  let distanceString: string = "";

  const localTime: Date = utcToZonedTime(new Date(date), userTimeZone);
  const distance = formatDistanceToNow(localTime, { addSuffix: true });

  if (
    parseInt(distance.replace("days", ""), 10) >= 7 &&
    parseInt(distance.replace("days", ""), 10) < 30
  ) {
    // GET WEEKS distance
    const weekDistance = differenceInCalendarWeeks(new Date(), localTime);
    distanceString =
      weekDistance.toString() + ` week${weekDistance > 1 ? "s" : ""} ago`;
  } else {
    distanceString = distance;
  }

  return distanceString;
};

export default getTimeDistance;
