export const ALERTS_TYPES = [
  "incompleteBulkCreateData",
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
  "errorDniInUse",
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
  "recoverableConfigUpdated",
  "dataUpdatedSuccessfully",
  "noProductsToRecover",
  "memberMissingFields",
  "birthdayGiftAlert",
  "computerUpgradeAlert",
  "successOffboarding",
  "errorOffboarding",
] as const;
export type AlertType = (typeof ALERTS_TYPES)[number];
