import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { SignUpInputDTO } from "../types/signUpInputDTO";






export class ProductContoller{
    constructor(
        private productBusiness: ProductBusiness
    ){}

    create = async (req:Request, res:Response):Promise< any >=>{

        try {
            const {id, name, tags} = req.body

            const input: SignUpInputDTO ={
                id,
                name,
                tags
            }

            await this.productBusiness.create(input) 

            res.status(201).send({message:"Product registered"})

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Registration error.")
        }
    }

    findProduct = async (req:Request, res:Response):Promise< any >=>{
        try {
            const id = req.params.id
            const name = req.query.name
            const tag = req.query.tag
            const result = await this.productBusiness.findProduct(id, name, tag)

            return res.status(200).send(result)

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Search error.")
        }
    }
} 