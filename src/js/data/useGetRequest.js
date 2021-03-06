import firebase from 'firebase';
import { useQuery } from 'react-query';

const useGetRequest = () => useQuery('requests', async () => {
  const userEmail = firebase.auth().currentUser.email;

  const data = await (await firebase
    .database()
    .ref('/request')
    .orderByChild('user')
    .equalTo(userEmail)
    .once('value'))
    .val();
  return data;
});

export default useGetRequest;
