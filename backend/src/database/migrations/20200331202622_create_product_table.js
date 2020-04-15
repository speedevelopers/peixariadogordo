exports.up = function(knex) {
  return knex.schema.createTable('product', function (table) {

      table.increments()
    
      table.string('description').notNullable()
      table.decimal('buyPrice').notNullable()
      table.decimal('salePrice').notNullable()
      table.integer('category_id').unsigned().notNullable()

      table.foreign('category_id')
        .references('id')
        .inTable('category')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('product')
};