# Node Stats Lite


[![NPM Version](https://img.shields.io/npm/v/node-stats-lite.svg)](https://www.npmjs.com/package/node-stats-lite)
[![NPM Downloads](https://img.shields.io/npm/dm/node-stats-lite.svg)](https://www.npmjs.com/package/node-stats-lite.svg)
[![Build Status](https://travis-ci.org/jyotman/node-stats-lite.svg?branch=master)](https://travis-ci.org/jyotman/node-stats-lite)
[![Coverage Status](https://coveralls.io/repos/github/jyotman/node-stats-lite/badge.svg?branch=master)](https://coveralls.io/github/jyotman/node-stats-lite?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/npm/node-stats-lite/badge.svg)](https://snyk.io/test/npm/node-stats-lite)
[![Dependency Status](https://david-dm.org/jyotman/node-stats-lite.svg)](https://david-dm.org/jyotman/node-stats-lite)

##### Get real time stats of a running Node.js process. Can be used for Node.js service monitoring.

### Installation 
	npm install node-stats-lite --save
	
### Usage

```js
const nodeStats = require('node-stats-lite');
```
	
This module can be used in 2 ways - 

#### 1. As an [Express.js](https://github.com/expressjs/express) middleware

```js
app.get('/monitor', nodeStats);
```

This will simply create a new API endpoint `/monitor` in your Express.js powered app. Then making a GET call to `/monitor` url path will provide all the stats.

#### 2. As a function
If you're not using Express.js or are not interested in using it as a middleware and want more control then you can simply call the function without any arguments to get all the stats. The function returns a Promise object.

```js
// using traditional promises
getStats().then((stats) => console.log(stats));

// using async-await
const stats = await getStats();
```

### Output
The stats Object(Method 2) or the API response(Method 1) provides the following stats - 

1. Node.js version running
2. Memory used by this Node service (in bytes)
3. Memory used by this Node service realtive to System memory (%)
4. CPU used by this Node service (%)
5. Name of the Node file which is executed
6. Uptime of this Node service (in seconds)
7. pid of this Node process


Sample response - 

```json
{
	"version": "v7.9.0",
	"service_name": "app.js",
	"cpu_usage": 1.4,
	"memory_consumed": 201768960,
	"memory_consumed_percent": 6.1,
	"uptime": 68231.624,
	"pid": 10790
}
```

### Requirements
1. Node.js version >= 7.6.0
2. Linux based system