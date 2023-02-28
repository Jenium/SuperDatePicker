export const getCurrentMonth = (now = new Date()) => {
  // const now = new Date();
  const firstDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const dayWeekFirstDate = firstDate.getDay();
  const lastDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  // const datesMonth = new Array(lastDate.getDate()).fill(1).map((day, idx) => (day + idx));
  const datesMonth = new Array(lastDate.getDate())
    .fill({})
    .map((day, idx) => new Date(now.getFullYear(), now.getMonth(), 1 + idx));
  // const countWeekInMonth = Math.ceil((dayWeekFirstDate + 1 + lastDate.getDate()) / 7);
  const countDaysPrevMonth = 6 - (6 - dayWeekFirstDate);
  const countDaysNextMonth = 6 - lastDate.getDay();

  const daysPrevMonth = [];
  for (let i = countDaysPrevMonth - 1; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth(), -i);
    daysPrevMonth.push(date);
  }

  const daysNextMonth = [];
  for (let i = 1; i <= countDaysNextMonth; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() + 1, i);
    daysNextMonth.push(date);
  }

  const fullDatesMonth = [...daysPrevMonth, ...datesMonth, ...daysNextMonth];
  const weeksMonth = [];
  for (let i = 0; i < fullDatesMonth.length; i += 7) {
    weeksMonth.push(fullDatesMonth.slice(i, i + 7));
  }

  return weeksMonth;
};
