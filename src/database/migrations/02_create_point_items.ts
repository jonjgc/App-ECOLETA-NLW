import Knex from 'knex';

export async function up(knex: Knex) {  //FUNCAO UP SERVE CRIAR TABELA
    return knex.schema.createTable('point_items', table => {  //POINS E O NOME DA MINHA TABELA, E TABLE E A REFERENCIA PARA CRIAR OS CAMPOS
        table.increments('id').primary();
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');

        table.string('item_id')
        .notNullable()
        .references('id')
        .inTable('items');        
    });

} 

export async function down(knex : Knex) { //FUNCAO DOWN SERVE PARA DELETAR O CAMPO  CRIADO
    return knex.schema.dropTable('items');
} 