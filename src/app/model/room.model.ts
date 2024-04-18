export interface RoomsModel {
  id: number;
  name: string;
  sizeInSquareMeter: number;
  temperature: number;
  humidity: number;
  airQualityInPM: number;
  eventSensor: {
    id: number;
    smokeSensor: boolean;
    gasDetector: boolean;
    floodDetector: boolean;
  };
  climateUnite: {
    id: number;
    setTemperature: number;
    state: boolean;
    maintenance: boolean;
  };
}
