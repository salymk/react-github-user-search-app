import { useQuery } from 'react-query';

export default function useProfile(username) {
  return useQuery(
    ['profile', username],
    () =>
      fetch(`https://api.github.com/users/${username}`).then((res) =>
        res.json()
      ),
    {
      enabled: Boolean(username),
    }
  );
}
