'use strict'

const { pipe, split, map, join, flip, concat } = require('ramda')

const emojis = require('./emojis.json') // [":smile:", ... ]

// [a] -> a
const random = xs => xs[Math.floor(Math.random() * xs.length)]

// String -> String
const append = flip(concat)

// String -> String
const italics = x => Math.random() > 0.70 ? `_${x}_` : x

// String -> String
const bold = x => Math.random() > 0.85 ? `**${x}**` : x

// String -> String
const italicsAndBold = pipe(italics, bold)

// String -> String
const appendEmoji = x => append(random(emojis), x)

// String -> String
const format = pipe(split(' '), map(italicsAndBold), join(' '))

// String -> String
module.exports = pipe(
  split(/\. |\n|\n /),
  map(pipe(format, append('. '), appendEmoji)),
  join('<br />')
)
