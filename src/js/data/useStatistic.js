import firebase from 'firebase';
import { useQuery } from 'react-query';

import requestStatus from '../enums/requestStatus';

const useStatistic = (from, to) => useQuery(['statistic', from, to], async () => {
  const data = await (await firebase
    .database()
    .ref('/request')
    .orderByChild('datetime')
    .startAt(Date.parse(new Date(from)))
    .endAt(Date.parse(new Date(to)))
    .once('value'))
    .val();

  let newReq = 0;
  let done = 0;
  Object.keys(data).forEach((id) => {
    if (data[id].state === requestStatus.NEW) {
      newReq += 1;
    }
    if (data[id].state === requestStatus.DONE) {
      done += 1;
    }
  });
  return [newReq, done];
}, {
  refetchOnWindowFocus: false,
});

export default useStatistic;
