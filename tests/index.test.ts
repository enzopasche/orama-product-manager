import { ProductBusiness } from "../src/business/ProductBusiness";
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock";

const productBusinessMock = new ProductBusiness(
  new ProductDatabaseMock() as any
);

describe("Teste de cadastro de produtos", () => {
  test("Erro que retorna quando id, nome e tag estiverem vazios", async () => {
    expect.assertions;
    try {
      await productBusinessMock.create({
        id: Number(""),
        name: "",
        tags: false,
      });
    } catch (error: any) {
      expect(error.message).toEqual("Insert ID, name and tag.");
    }
  });

  test("Erro que retorna quando id estiver vazio", async () => {
    expect.assertions;
    try {
      await productBusinessMock.create({
        id: Number(""),
        name: "teste",
        tags: [],
      });
    } catch (error: any) {
      expect(error.message).toEqual("Insert ID, name and tag.");
    }
  });

  test("Erro que retorna quando name estiver vazio", async () => {
    expect.assertions;
    try {
      await productBusinessMock.create({
        id: 1456,
        name: "",
        tags: ["teste"],
      });
    } catch (error: any) {
      expect(error.message).toEqual("Insert ID, name and tag.");
    }
  });

  test("Erro que vai retornar quando tags estiver vazio", async () => {
    expect.assertions;
    try {
      await productBusinessMock.create({
        id: 1456,
        name: "teste",
        tags: false,
      });
    } catch (error: any) {
      expect(error.message).toEqual("Insert ID, name and tag.");
    }
  });
});

describe("Teste de busca de produtos", () => {
  test("Erro que acontece quando o produto não existe.", async () => {
    expect.assertions;
    try {
      const result = await productBusinessMock.findProduct(4, null, null);

      expect(result).toBe(undefined);
    } catch (error: any) {
      expect(error.message).toEqual("Product not found.");
    }
  });

  

  
});
19;
