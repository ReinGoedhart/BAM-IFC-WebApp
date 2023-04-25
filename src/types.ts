export interface GisParameters {
  container: HTMLDivElement;
  accessToken: string;
  zoom: number;
  center: [number, number];
  pitch: number;
  bearing: number;
  buildings?: number;
}

export interface GisBuilding {
  id: string;
  lat: number;
  lng: number;
  htmlElement: HTMLElement;
}
