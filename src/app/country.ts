export class Country {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static mapCountry(data: any): Country {
        return new Country(data.id, data.name);
    }
}