const express = require('express');
const server = (express());

server.use(express.json());

const knex = require('knex');
const dbConfig = require('./knexfile.js');
const db = knex(dbConfig.development);

server.get('/api/cohorts', (req, res) => {
    db('cohorts')
        .then(results => res.json(results))
        .catch(err => res.json(err))
})

server.get('/api/cohorts/:id', (req, res) => {
    db('cohorts')
    .where({id: req.params.id})
    .first()
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

server.post('/api/cohorts', (req, res) => {
    db('cohorts').insert(req.body)
        .then(newCohort => res.json(newCohort))
        .catch(err => res.json(err))
})

server.delete('/api/cohorts/:id', (req, res) => {
    db('cohorts')
        .where({id: req.params.id})
        .del()
        .then(cohorts => res.json(cohorts))
        .catch(err => res.json(err))
})

server.put('/api/cohorts/:id', (req, res) => {
    db('cohorts')
        .where({id: req.params.id})
        .update(req.body)
        .then(updated => res.json(updated))
        .catch(err => res.json(err))
})

server.get('/', (req, res) => {
    res.send('Hello World')
});


module.exports = server;