export class Tour{
    id: number;
    name: string;
    description: string;
    id_country: number;
    id_city: number;
    id_hotel: number;
    count_persons: number;
    transport: string;
    price: number;
    time_from: string;
    time_to: string;
    features: Record<string, boolean>;
    img: string;
    hotel_images: string[];
    constructor(
        id: number,
        name: string,
        description: string,
        id_country: number,
        id_city: number,
        id_hotel: number,
        count_persons: number,
        transport: string,
        price: number,
        time_from: string,
        time_to: string,
        features: Record<string, boolean>,
        img: string,
        hotel_images: string[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.id_country = id_country;
        this.id_city = id_city;
        this.id_hotel = id_hotel;
        this.count_persons = count_persons;
        this.transport = transport;
        this.price = price;
        this.time_from = time_from; 
        this.time_to = time_to;
        this.features = features;
        this.img = img; 
        this.hotel_images = hotel_images;
    }

    static mapTour(data: any): Tour {
        return new Tour(
            data.id,
            data.name,
            data.description,
            data.id_country,
            data.id_city,
            data.id_hotel,
            data.count_persons,
            data.transport,
            data.price,
            data.time_from,
            data.time_to,
            {
                'Visa': data.visa,
                'Insurance': data.insurance,
                'Transfer': data.transfer
            },
            data.img,
            data.hotel_images
        );
    }

}