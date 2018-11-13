'use strict';
var loremIpsum = require('lorem-ipsum'),
	output = loremIpsum();

function generate() {
	var output = loremIpsum({
		count: 10, // Number of words, sentences, or paragraphs to generate.
		units: 'paragraphs', // Generate words, sentences, or paragraphs.
		sentenceLowerBound: 5, // Minimum words per sentence.
		sentenceUpperBound: 15, // Maximum words per sentence.
		paragraphLowerBound: 3, // Minimum sentences per paragraph.
		paragraphUpperBound: 7, // Maximum sentences per paragraph.
		format: 'plain', // Plain text or html
		words: ['adding', 'dolores', 'serverless', 'november','chicken', 'wings', 'framework', 'water', 'no', 'server', 'Michael', 'Jordan' ],  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
		random: Math.random // A PRNG function. Uses Math.random by default
	});
	return output;
}

function createSuccessResponse(response) {
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(response)
	};
}

module.exports.fun = (event, context, callback) => {
	callback(null, createSuccessResponse(generate()));
};
