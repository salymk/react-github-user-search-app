import { useQuery } from 'react-query';

export default function useProfile(username) {
  return useQuery(
    ['profile', username],
    async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    {
      enabled: Boolean(username),
    }
  );
}
