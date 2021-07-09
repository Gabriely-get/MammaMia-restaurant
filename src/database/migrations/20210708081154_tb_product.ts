import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('product', function(t) {
        t.increments('id').notNullable().primary();
        t.string('name').notNullable();
        t.string('description').nullable();
        t.float('price').notNullable();
        t.boolean('active').notNullable().defaultTo("1");
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('product');
}

