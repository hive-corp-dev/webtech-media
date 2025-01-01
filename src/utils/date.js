// import { toZonedTime } from "date-fns-tz";

// export const formatDate = (dateData) => {
//   const data = toZonedTime(dateData, "Asia/Tokyo");

//   const year = data.getFullYear();
//   const month = data.getMonth() + 1;
//   const date = data.getDate();

//   return `${year}.${month < 10 ? "0" + month : month}.${date < 10 ? "0" + date : date}`;
// };

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ja");
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (dateData) => {
  const localDate = dayjs(dateData).tz("Asia/Tokyo", true);

  return localDate.format("YYYY.MM.DD");
};
