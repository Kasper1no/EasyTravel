export class Blog {
    id: number;
    title: string;
    image1: string;
    text1: string;
    image2: string;
    description: string;
    text2: string;
    constructor(id: number, title: string, image1: string, text1: string, text2: string,description: string, image2: string = '') {
        this.id = id;
        this.title = title;
        this.image1 = image1;
        this.text1 = text1;
        this.description = description;
        this.image2 = image2;
        this.text2 = text2;
    }
}