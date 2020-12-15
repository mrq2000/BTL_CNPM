import firebase from 'firebase';
import { useQuery } from 'react-query';

const useUserInfo = (id) => useQuery(['image', id], async () => {
  const data = await firebase.storage().ref(`image/${id}`).getDownloadURL();

  return data;
}, {
  staleTime: Infinity,
});

export default useUserInfo;
