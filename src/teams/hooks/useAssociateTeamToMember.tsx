import { useMutation, useQueryClient } from "@tanstack/react-query";
import { associateTeamToMember } from "../actions";
import { useStore } from "@/models";

export const useAssociateTeamToMember = () => {
  const queryClient = useQueryClient();
  const {
    teams: { updateTeam },
    alerts: { setAlert },
  } = useStore();

  return useMutation({
    mutationFn: ({ teamId, memberId }: { teamId: string; memberId: string }) =>
      associateTeamToMember(teamId, memberId),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
      updateTeam(data);
      //   setAlert("associateTeamSuccess");
    },
    onError: (error) => {
      console.error("Error associating team to member:", error);
      //   setAlert("associateTeamError");
    },
  });
};
