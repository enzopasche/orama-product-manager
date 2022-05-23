import { Product } from "../../src/model/Products"
import { productMock} from "./ProductMock"


export class ProductDatabaseMock{
    public async create(product:Product):Promise<void>{}

    public async findProduct(id?:number, name?:string, tag?:[]):Promise<Product|undefined>{
        if(id === 6){
            return productMock
        }else{
            return undefined
        }
        
    }
}