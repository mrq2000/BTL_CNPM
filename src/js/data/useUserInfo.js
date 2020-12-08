import firebase from 'firebase';
import { useQuery } from 'react-query';

const useUserInfo = () => useQuery('userInfo', async () => {
  const userId = firebase.auth().currentUser.uid;
  console.log(userId);
  const data = await (await firebase.database().ref(`/users/${userId}`).once('value')).val();
  return data;
}, {
  staleTime: Infinity,
});

export default useUserInfo;