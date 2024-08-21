export const ALERTS_TYPES = [
  "csvSuccess",
  "updateMember",
  "updateStock",
  "createProduct",
  "createMember",
  "deleteMember",
  "deleteStock",
  "errorDeleteStock",
  "errorDeleteMember",
  "errorRecoverableStock",
  "createTeam",
  "errorCreateTeam",
  "deleteTeam",
  "errorDeleteTeam",
  "updateTeam",
  "errorUpdateTeam",
  "assignedProductSuccess",
  "errorAssignedProduct",
  "errorCreateMember",
  "errorEmailInUse",
  "removeItemSuccesfully",
  "memberUnassigned",
  "userUpdatedSuccesfully",
  "passwordChange",
  "ErorPasswordChange",
  "missingBrandOrModel",
  "errorDeleteTeamWithMembers",
  "bulkCreateProductSuccess",
  "bulkCreateProductError",
  "bulkCreateSerialNumberError",
] as const;
export type AlertType = (typeof ALERTS_TYPES)[number];
