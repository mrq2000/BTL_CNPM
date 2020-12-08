import firebase from 'firebase';
import { useQuery } from 'react-query';

const useUserInfo = () => useQuery('my info as admin', async () => {
  const id = firebase.auth().currentUser.uid;

  const data = await (await firebase.database().ref(`/admin/${id}`).once('value')).val();
  return data;
}, {
  staleTime: Infinity,
});

export default useUserInfo;
