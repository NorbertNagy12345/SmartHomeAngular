export interface RoomsModel {
  id: number;
  name: string;
  sizeInSquareMeter: number;
  temperature: number;
  humidity: number;
  airQualityInPM: number;
  smartLight:{
    id: number;
    lightTemperatureInKelvin: number;
    intensityInLumen: number;
    state: boolean;
  };
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
