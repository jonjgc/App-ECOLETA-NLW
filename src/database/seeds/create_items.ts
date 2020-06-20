import Knex from 'knex';

export async function seed(knex : Knex) { //EXPORTANDO A FUNCAO ASSINCRONA. A VARIAVEL knex E UMA INSTANCIA DE Knex, assim, usando os "poderes" do typescript
    await knex('items').insert([ //CHAMANDA A TABELA 'ITEMS', EM SEGUIDA INSERINDO O OBJETO, CADA OBJETO SERA UM REGISTRO NA MINHA TABELA
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },
        
    ]);
}
