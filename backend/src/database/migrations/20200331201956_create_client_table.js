
exports.up = function(knex) {
  return knex.schema.createTable('client', function (table) {

    table.increments()
  
    table.string('name').notNullable()
    table.string('address')
    table.string('number')
    table.string('neighborhood')
    table.string('city')
    table.string('uf')
    table.string('email')
    table.string('whatsapp').notNullable()
})
}

exports.down = function(knex) {
  return knex.schema.dropTable('client')
};