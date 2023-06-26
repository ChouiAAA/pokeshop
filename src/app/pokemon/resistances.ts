export class Resistances{

  name:string;
  damage_multiplier: number;
  damage_relation:string;

  constructor(
    name:string,
    damageMultiplier: number,
    damageRelation:string,
  ){
    this.name = name;
    this.damage_multiplier = damageMultiplier;
    this.damage_relation = damageRelation
  }

  }
