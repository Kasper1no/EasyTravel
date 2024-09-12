export class Hotel{
    id: number;
    name: string;
    id_city: number;
    id_country: number;
    description: string;
    room_desc: string;
    meal_desc: string;
    location_desc: string;
    beach_desc: string;
    address: string;
    phone: string;
    email: string;
    features: string[];
    rooms_desc: string;
    free_count: number;
    
    constructor(
        id: number,
        name: string,
        id_city: number,
        id_country: number,
        description: string,
        room_desc: string,
        meal_desc: string,
        location_desc: string,
        beach_desc: string,
        address: string,
        phone: string,
        email: string,
        features: string[],
        rooms_desc: string,
        free_count: number
    ) {
        this.id = id;
        this.name = name;
        this.id_city = id_city;
        this.id_country = id_country;
        this.description = description;
        this.room_desc = room_desc;
        this.meal_desc = meal_desc;
        this.location_desc = location_desc;
        this.beach_desc = beach_desc;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.features = features;
        this.rooms_desc = rooms_desc;
        this.free_count = free_count;
    }

    static mapHotel(data: any): Hotel {
        return new Hotel(
            data.id,
            data.name,
            data.id_city,
            data.id_country,
            data.description,
            data.room_desc,
            data.meal_desc,
            data.location_desc,
            data.beach_desc,
            data.address,
            data.phone,
            data.email,
            data.features,
            data.rooms_desc,
            data.free_count
        );
    }
}