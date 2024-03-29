import { IProductData } from "../model/IProductData";
import { SignUpOutputDTO } from "../types/signUpOutputDTO";
import { BaseDatabase } from "./BaseDatabase";



export class ProductDatabase extends BaseDatabase implements IProductData {

    findById = async (id: number):Promise<SignUpOutputDTO>=>{
        try {
            const [product] = await this.connection.raw(`
            SELECT * FROM products 
            WHERE id='${id}'
            `)

            

        return product;

        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      } 

    create = async(input:any):Promise<void>=>{

        await this.connection.raw(`
            INSERT INTO products (id, name, tags)
            VALUES (
                "${input.id}",
                "${input.name}",
                "${input.tags}"
            );
        `)
    }

    findProduct = async (id?:number, name?:string, tag?:string):Promise<SignUpOutputDTO>=>{
        try {
            const result = await this.connection.raw(`
                SELECT * FROM products
                WHERE 
                    id = "${id}" OR
                    name LIKE "%${name}%" OR
                    tags LIKE "%${tag}%"
                    ORDER BY name;
                `)

        return result[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
} 