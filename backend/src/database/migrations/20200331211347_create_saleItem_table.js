exports.up = function(knex) {
  return knex.schema.createTable('saleItem', function (table){

    table.increments()
    
    table.integer('sale_id').unsigned().notNullable()
    table.string('description').notNullable()
    table.decimal('quantity').notNullable()
    table.decimal('price').notNullable()
    table.decimal('discount')
    table.decimal('partial').notNullable()

    table.foreign('sale_id')
      .references('id')
      .inTable('sale')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('saleItem')  
};
