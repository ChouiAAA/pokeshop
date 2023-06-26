import { Types } from './types';
import { Stats } from './stats';
import { Resistances } from './resistances';
import { Evolutions } from './evolution';

export class Pokemon {

  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite:string;
  slug: string;
  stats: Stats;
  apiTypes: Array<Types>;
  apiResistances: Array<Resistances>;
  apiEvolutions: Array<Evolutions>;


  constructor(

    id: number,
    pokedexId: number,
    name: string,
    image: string,
    sprite:string,
    slug:string,
    stats: Stats,
    types: Array<Types>,
    resistances: Array<Resistances>,
    evolution: Array<Evolutions>,
  ) {
      this.id = id ;
      this.pokedexId = pokedexId;
      this.name = name;
      this.image = image;
      this.sprite = sprite;
      this.slug = slug
      this.stats = stats;
      this.apiTypes = types;
      this.apiResistances = resistances;
      this.apiEvolutions = evolution;

}

}


