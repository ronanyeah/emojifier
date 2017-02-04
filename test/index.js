'use strict'

const assert = require('assert')

const fn = require(`${__dirname}/../index.js`)

const fixture = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elementum lorem. Maecenas eu dictum quam. Donec posuere tincidunt justo vitae dapibus. In convallis nisi et nulla faucibus fringilla. Curabitur id nibh nulla. Cras et quam vehicula, hendrerit odio id, semper tortor. Donec metus ex, commodo sit amet elit non, vehicula ultricies orci. Praesent mauris sem, fringilla sit amet porta dapibus, commodo in arcu. Ut nisl tellus, lacinia iaculis scelerisque ut, pulvinar in leo.'

assert.equal(typeof fn(fixture), 'string')
