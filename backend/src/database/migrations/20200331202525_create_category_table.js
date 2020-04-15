exports.up = function(knex) {
  return knex.schema.createTable('category', function (table) {

      table.increments()
    
      table.string('name').unique().comment('This name already exists.').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('category')
};