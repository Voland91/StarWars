export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[] | [],
  species: string[] | [],
  vehicles: string[] | [],
  starships: string[] | [],
  created: string;
  edited: string;
  url: string;
}

export interface Characters {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[] | [];
  films: string[] | [];
  created: string;
  edited: string;
  url: string;
}

export interface Planets {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}
