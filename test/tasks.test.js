'use strict'

const test = require('ava');
const sinon = require('sinon');
const Intervaly = require('../index');

let clock;
let intervaly;

test.beforeEach(() => {

  clock = sinon.useFakeTimers();

  intervaly = new Intervaly();

});

test.afterEach(() => {

  clock.restore();

  intervaly = null;

});

test.serial('adding a new task with a default interval level', t => {

  function hello() {}

  const task = intervaly.addTask('hello', hello);

  t.is(task.interval, 1000);

});

test.serial('adding a new task with an interval of 5000ms', t => {

  function hello() {}

  const task = intervaly.addTask('hello', hello, 5000);

  t.is(task.interval, 5000);

});

test.serial('running a task every second', t => {

  let count = 0;

  function hello() {
    count++;
  }

  intervaly.addTask('hello', hello, 1000);

  intervaly.start();

  clock.tick(2000);

  t.is(count, 2);

});

test.serial('running a task every other second', t => {

  let count = 0;

  function hello() {
    count++;
  }

  intervaly.addTask('hello', hello, 2000);

  intervaly.start();

  clock.tick(3000);

  t.is(count, 1);

});

test.serial('running a task every other second then changing it to run every 5 seconds', t => {

  let count = 0;

  function hello() {
    count++;
  }

  const task = intervaly.addTask('hello', hello, 2000);

  intervaly.start();

  clock.tick(3000);

  task.interval = 5000;

  clock.tick(12000);

  t.is(count, 4);

});

test.serial('removing a task', t => {

  function hello() {
    return 'Hello World!'
  }

  intervaly.addTask('hello', hello, 2000);

  intervaly.start();

  clock.tick(3000);

  intervaly.removeTask('hello');

  t.is(intervaly._tasks.length, 0);

});