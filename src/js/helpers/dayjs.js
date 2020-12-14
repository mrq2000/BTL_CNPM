import dayjs from 'dayjs';

export const formatDateTime = (dateTime) => dayjs(dateTime).format('HH:mm DD/MM/YYYY');
export const timeNow = formatDateTime(Date.now());
