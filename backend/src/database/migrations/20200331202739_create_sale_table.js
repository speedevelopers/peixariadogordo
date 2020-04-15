
exports.up = function(knex) {
  return knex.schema.createTable('sale', function (table){
    
    table.increments()
    
    table.integer('client_id').unsigned().notNullable()
    table.date('saleDay').notNullable()
    table.decimal('discount')
    table.decimal('total').notNullable()
    
    table.foreign('client_id')
      .references('id')
      .inTable('client')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sale')  
};
