
//Changes applied to database
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('cohorts', tbl => {
        //primary key called id, integer, auto-increment
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
        tbl.timestamps(true, true);
    })


};
//Undo the changes of the structure
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};
