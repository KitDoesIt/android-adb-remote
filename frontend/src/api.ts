// Types shared between frontend and server

export type AdbState = "connected" | "auth_required" | "disconnected" | "no_device";

export interface StatusInfo {
  type: "status";
  adbState: AdbState;
  adbDevice: string;
  adbDetail: string;
  daemon: boolean;
}

export interface FavEntry {
  pkg: string;
  label: string;
}

export interface AppInfo {
  pkg: string;
  label: string;
}
