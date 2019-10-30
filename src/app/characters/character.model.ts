export class Character {
  id: number;
  name: string;
  description: string;
  image: string;
  numberOfRoles?: number;
  isGood?: boolean;

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    numberOfRoles?: number,
    isGood?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.numberOfRoles = numberOfRoles;
    this.isGood = isGood;
    this.image = image;
  }
}
