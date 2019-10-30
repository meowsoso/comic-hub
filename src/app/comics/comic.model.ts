export class Comic {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  charactersArray: number[];

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    characterArray: number[],
    slug: string
  ) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.description = description;
    this.image = image;
    this.charactersArray = characterArray;
  }
}
