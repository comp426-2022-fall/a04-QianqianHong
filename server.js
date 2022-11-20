#!/usr/bin/env node

import express from "express";
import minimist from "minimist";
import { roll } from "./lib/roll.js";

const app = express();
const args = minimist(process.argv.slice(2));

app.use(express.urlencoded({ extended: true }));

// 1
const port = args.port || 5000;

// 3
app.get('/app/', (req, res) => {
	res.status(200).send('200 OK');
});

// 4
app.get('/app/roll/', (req, res) => {
	res.send(roll(6, 2, 1));
});

// 5
app.post('/app/roll/', (req, res) => {
	let sides = parseInt(req.body.sides);
	let dice = parseInt(req.body.dice);
	let rolls = parseInt(req.body.rolls);
	res.send(roll(sides, dice, rolls));
});

// 6
app.get('/app/roll/:sides/', (req, res) => {
	let sides = parseInt(req.params.sides);
	res.send(roll(sides, 2, 1));	
});

// 7
app.get('/app/roll/:sides/:dice/', (req, res) => {
	let sides = parseInt(req.params.sides);
	let dice = parsetInt(req.params.dice);
	res.send(roll(sides, dice, 1));
});

// 8
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
	let sides = parseInt(req.params.sides);
	let dice = parsetInt(req.params.dice);
	let rolls = parsetInt(req.params.rolls);
	res.send(roll(sides, dice, rolls));
});

// 2
app.use((req, res) =>  {
	res.status(404).send('404 NOT FOUND');
});

app.listen(port);
