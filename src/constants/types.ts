import { filterOptions } from "@/constants";

export interface SeverityCount {
  critical: number;
  high: number;
  medium: number;
  low: number;
}

export interface Asset {
  name: string;
  severity: SeverityCount;
}

export interface Finding {
  id: number;
  finding: string;
  asset: { name: string; logo: string };
  software: string;
  owner: { name: string; avatar: string };
  internetStatus: string;
  status: string;
  severity: string;
  source: string;
  firstSeen: string;
  lastSeen: string;
  riskLevel: string;
  responsibility: string;
  resolvingGroup: string;
  businessUnit: string;
  criticalAsset: boolean;
  regulation: string;
  riskState: string;
}

export enum InternetStatus {
  Exposed = "Exposed",
  Locked = "Locked",
  Activated = "Activated",
  None = "None",
}

export enum Status {
  Assigned = "Assigned",
  Accepted = "Accepted",
  Unassigned = "Unassigned",
}

export type FilterKey = keyof typeof filterOptions;
export type Filters = Record<FilterKey, string>;
