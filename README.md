# Node Stats Lite
[![NPM](https://nodei.co/npm/node-stats-lite.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-stats-lite/)

Include the module in you project by passing the instance of your express app  
```var stats = require('node-stats-lite')(app)```

Then making a GET call to `/monitor` url path will provide all the stats.

It provides the following stats - 

1. Node.js version running
2. Memory used by this Node service (in bytes)
3. Memory used by this Node service (%)
4. CPU used by this Node service (%)
5. Name of the Node file which is executed
6. Uptime of this Node service ( in seconds)
7. pid of this Node process


Sample response - 
```
{
    "version": "v0.12.7",
    "service_name": "req.js",
    "cpu_usage": 1.4,
    "memory_consumed": 201768960,
    "memory_consumed_percent": 6.1,
    "uptime": 68231.624,
    "pid": 10790
}
```

**Note** - Works on linux based systems.