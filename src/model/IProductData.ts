import { SignUpOutputDTO } from "../types/signUpOutputDTO";

export interface IProductData{
    findById(id: number):Promise<SignUpOutputDTO>
    create(input:any):Promise<void>
    findProduct(id?:number, name?:string, tag?:string):Promise<SignUpOutputDTO>
} 