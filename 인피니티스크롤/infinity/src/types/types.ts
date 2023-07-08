export interface DogResponeData {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
interface Breed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  country_code: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}
