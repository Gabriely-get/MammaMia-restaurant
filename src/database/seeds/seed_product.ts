import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    
    await knex("product").del();

    await knex("product").insert([
        { name: "Bife acebolado", description: "Arroz, feijão, bife acebolado, salada de alface, batata frita e farofa", price: "20.00" },
        { name: "Macarrão gratinado", description: "Macarrão, queijo parmesão, queijo mussarela, presunto e tomate", price: "18.00" },
        { name: "Arroz carreteiro", description: "", price: "18.00" },
        { name: "Frango à parmegiana", description: "Arroz, feijão, frango à parmegiana, salada de alface, batata frita e farofa", price: "20.00" },
        { name: "Frango grelhado com salada", description: "", price: "15.00" }
    ]);
};
