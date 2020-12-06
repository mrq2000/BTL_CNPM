import firebase from 'firebase';
import { useQuery } from 'react-query';

const useGetRequest = () => useQuery('requests', async () => {
  const userId = firebase.auth().currentUser.uid;

  const data = await (await firebase.database().ref(`/request/${userId}`).once('value')).val();
  return data;
}, {
  staleTime: Infinity,
});

export default useGetRequest;
