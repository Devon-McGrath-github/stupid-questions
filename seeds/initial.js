
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('questions').del()
      .then(function () {
        return Promise.all([
          // Inserts seed entries
          knex('questions').insert({
            "content": "What is your name?"
          }),
          knex('questions').insert({
            "content": "What is my name?"
          })
        ]);
      })
};
