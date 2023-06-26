export class Stats{
  static defense(pokemonList: import("./pokemon").Pokemon[] | undefined, defense: any): (value: import("./pokemon").Pokemon[], index: number) => unknown {
    throw new Error('Method not implemented.');
  }

  HP:number;
  attack:number;
  defense:number;
  special_attack: number;
  special_defense: number;
  speed:number;

  constructor(
    hp:number,
    attack:number,
    defense:number,
    specialAttack: number,
    specialDefense: number,
    speed:number,
  ){
    this.HP = hp;
    this.attack = attack;
    this.defense = defense;
    this.special_attack = specialAttack;
    this.special_defense = specialDefense;
    this.speed = speed;
  }

  }
