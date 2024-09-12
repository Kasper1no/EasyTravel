export class City{
    id: number;
    name: string;
    id_country: number;

    constructor(id: number, name: string, id_country: number){
        this.id = id;
        this.name = name;
        this.id_country = id_country;
    }

    static mapCity(data: any): City {
        return new City(data['id'], data['name'], data['id_country']);
    }
}