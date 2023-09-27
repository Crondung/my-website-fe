export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  official_artwork: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
}
