
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('questions', function(table) {
      table.increments('id').primary()
      table.string('content')
    }),
    knex.schema.createTableIfNotExists('answers', function (table) {
      table.increments('id').primary()
      table.integer('question_id').references('questions.id')
      table.string('content')
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfNotExists('questions'),
    knex.schema.dropTableIfNotExists('answers')
  ])

};
