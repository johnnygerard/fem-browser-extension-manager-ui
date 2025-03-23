export const FILTER = {
  ALL: "All",
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

export type Filter = (typeof FILTER)[keyof typeof FILTER];
