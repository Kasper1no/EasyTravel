export class Order {
    id: number;
    tour_id: number;
    email: string;
    status: string;
    constructor(id: number, tour_id: number, email: string, status: string) {
       this.id = id;
       this.tour_id = tour_id;
       this.email = email;
       this.status = status;
    }

    static mapOrder(data:any):Order{
        return new Order(data.id, data.tour_id, data.email, data.status);
    }
}