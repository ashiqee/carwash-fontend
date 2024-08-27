

export interface IServices{
    _id:string;
    name: string;
    images?:string;
    serviceLevel?:string;
    description:string;
    price:number;
    duration:number;
    isDeleted: boolean;
}