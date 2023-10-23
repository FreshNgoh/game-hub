import { useQuery } from '@tanstack/react-query';
import { ScreenShot } from '../entities/ScreenShot';
import APIClient from '../services/api-clients';

const useScreenShots = (gameId: number) => {
    const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

    return useQuery({
      queryKey: ["srceenshots", gameId],
      queryFn: apiClient.getAll,
    })}

export default useScreenShots;