import firebase from 'firebase';
import { useQuery } from 'react-query';

const useThirdPartyInfo = () => useQuery('third party', async () => {
  const data = await (await firebase.database().ref('/third-party').once('value')).val();
  return data;
}, {
  staleTime: Infinity,
});

export default useThirdPartyInfo;
