
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('questions').del()
      .then(function () {
        return Promise.all([
          // Inserts seed entries
          knex('questions').insert({
            "id": 1,
            "content": "What is your name?"
          }),
          knex('questions').insert({
            "id": 2,
            "content": "What is my name?"
          })
        ]);
      }),
    knex('answers').del()
      .then(function () {
        return Promise.all([
          knex('answers').insert({
              "id": 1,
              "question_id": 1,
              "content": "My name is Hans Zimmer"
            }),
          knex('answers').insert({
            "id": 2,
            "question_id": 2,
            "content": "Your name is John"
          }),
          knex('answers').insert({
            "id": 3,
            "question_id": 2,
            "content": "Your name is Jennifer"
            })
        ])
      })
  ]);
};
