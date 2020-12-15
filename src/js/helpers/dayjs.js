import dayjs from 'dayjs';

export const formatDateTime = (dateTime) => dayjs(new Date(dateTime)).format('HH:mm DD/MM/YYYY');
export const timeNow = Date.now();
