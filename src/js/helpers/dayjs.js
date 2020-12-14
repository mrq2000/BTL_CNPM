import dayjs from 'dayjs';

export const formatDateTime = (dateTime) => dayjs(Date(dateTime)).format('HH:mm DD/MM/YYYY');
export const timeNow = Date.now();
