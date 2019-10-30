<div align="center">

# Intervaly

A simple API that allows you to run functions on an interval using the more reliable setTimeout strategy. All methods are run as async in order to make sure that async methods follow the timeout.

</div>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/intervaly.svg?style=flat)](https://www.npmjs.com/package/intervaly)
[![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/intervaly/badge.svg)](https://snyk.io/test/github/robertcorponoi/intervaly)
[![NPM downloads](https://img.shields.io/npm/dm/intervaly.svg?style=flat)](https://www.npmjs.com/package/intervaly)
<a href="https://badge.fury.io/js/intervaly"><img src="https://img.shields.io/github/issues/robertcorponoi/intervaly.svg" alt="issues" height="18"></a>
<a href="https://badge.fury.io/js/intervaly"><img src="https://img.shields.io/github/license/robertcorponoi/intervaly.svg" alt="license" height="18"></a>
[![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

## **Table of contents**

- [Why](#why)
- [Install](#install)
- [Usage](#usage)
- [Basic Example](#basic-example)
- [Initializatiaon](#initialization)
- [API](#api)
  - [start](#start)
  - [stop](#stop)
  - [addTask](#add-task)
  - [removeTask](#remove-task)
  - [clear](#clear)

## **Why**

I created invervaly because I was sick of creating the same methods over and over again to use `setTimeout` for interval functionality instead of `setInterval` since it's more reliable. I also wanted to bind multiple tasks to the same interval timer instead of creating multiple ones.

## **Install**

To install it as a global command to use anywhere you can use:

```shell
$ npm install intervaly
```

## **Usage**

To use intervaly in your project in a Node environment use:

```js
const Intervaly = require('intervaly');

const invervaly = new Intervaly();
```

If you're in a browser/webpack environment  use:

```js
import Intervaly from 'intervaly';

const intervaly = new Intervaly();
```

## **Basic Example**

```js
const Intervaly = require('intervaly');

const intervaly = new Intervaly();

/**
 * Say 'Hello'.
 * 
 * We want this task to run every 2 seconds.
 */
const hello = () => {
  console.log('Hello');
};

/**
 * Say 'World'.
 * 
 * We want this task to run every 3 seconds.
 */
const world = () => {
  console.log('World!');
};

intervaly.addTask('hello', hello, 2000).addTask('world', world, 3000);
```

Note the simple chainable API allowing you to easily create interval timers. While some implementations of similar programs don't have a name parameter I find that it makes removing and working with tasks much faster and wastes less resources.

## **Initialization**

When you create a new instance of Intervaly, there are several options that can be provided:

| param             	| type    	| description                                                                            	| default 	|
|-------------------	|---------	|----------------------------------------------------------------------------------------	|---------	|
| options           	| Object  	|                                                                                        	|         	|
| options.interval  	| number  	| The amount of time that should pass between ticks of the timer.                        	| 1000    	|
| options.autostart 	| boolean 	| Indicates whether or not Intervaly will start the timer as soon as it its initialized. 	| false   	|

## **API**

### **start**

Starts the interval timer. If the `autostart` option is set to true then this method will be called automatically after Intervaly is finished initializing.

**Example**

```js
const hello = () => {
  return 'Hello World!';
};

intervaly.addTask('hello', hello);

intervaly.start();
```

### **stop**

Stops the operation of the timer.

**Example**

```js
const hello = () => {
  return 'Hello World!';
};

intervaly.addTask('hello', hello);

intervaly.start();

intervaly.stop();
```

### **addTask**

Adds a task to be run on an interval. This returns the created task.

| param    	| type     	| description                                     	| default 	|
|----------	|----------	|-------------------------------------------------	|---------	|
| name     	| string   	| The name of this task used to modify/remove it. 	|         	|
| fn       	| Function 	| The function to run on an interval.             	|         	|
| interval 	| number   	| The interval that this task should run at.      	| 1000    	|

**Example**

```js
const hello = () => {
  return 'Hello World!';
};

intervaly.addTask('hello', hello);
```

### **removeTask**

Removes a task from Intervaly by its name.

| param    	| type     	| description                                     	| default 	|
|----------	|----------	|-------------------------------------------------	|---------	|
| name     	| string   	| The name of the task to remove.                 	|         	|

**Example**

```js
const hello = () => {
  return 'Hello World!';
};

intervaly.addTask('hello', hello);

intervaly.removeTask('hello');
```

### **clear**

Removes all tasks from the timer.

```js
const hello = () => {
  return 'Hello World!';
};

intervaly.addTask('hello', hello);

intervaly.clear();
```

## **Tests**

To run the tests available for intervaly, use:

```bash
$ npm run test
```

## **License**

[MIT](./LICENSE)