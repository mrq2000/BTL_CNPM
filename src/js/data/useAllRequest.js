import firebase from 'firebase';
import { useQuery } from 'react-query';

const useAllRequest = (limit) => useQuery('all requests', async () => {
  const data = await (await firebase
    .database()
    .ref('/request')
    .limitToLast(limit)
    .once('value'))
    .val();
  return data;
});

export default useAllRequest;
