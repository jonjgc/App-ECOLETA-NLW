import Knex from 'knex';

export async function up(knex: Knex) {  //FUNCAO UP SERVE CRIAR TABELA
    return knex.schema.createTable('items', table => {  //POINS E O NOME DA MINHA TABELA, E TABLE E A REFERENCIA PARA CRIAR OS CAMPOS
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
        
    });

} 

export async function down(knex : Knex) { //FUNCAO DOWN SERVE PARA DELETAR O CAMPO  CRIADO
    return knex.schema.dropTable('items');
}  