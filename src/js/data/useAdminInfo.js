import firebase from 'firebase';
import { useQuery } from 'react-query';

const useUserInfo = () => useQuery('adminInfo', async () => {
  const data = await (await firebase.database().ref('/admin').once('value')).val();
  return data;
}, {
  staleTime: Infinity,
});

export default useUserInfo;
