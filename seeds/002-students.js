
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Ricky Bobby', cohort_id: 2 },
        {name: 'Napoleon Dynamite', cohort_id: 3},
        {name: 'DopeMan', cohort_id: 4}
      ]);
    });
};
