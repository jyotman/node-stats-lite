/**
 * Created by jyot on 21/5/17.
 */
'use strict';

const nodeStats = require('../index');

test('Main API', async () => {
    expect.assertions(7);
    const stats = await nodeStats();
    expect(stats.version).toBeDefined();
    expect(stats.service_name).toBeDefined();
    expect(stats.cpu_usage).toBeGreaterThanOrEqual(0);
    expect(stats.memory_consumed).toBeGreaterThan(20000000);
    expect(stats.memory_consumed_percent).toBeGreaterThan(0.1);
    expect(stats.uptime).toBeGreaterThan(2);
    expect(stats.pid).toBeGreaterThan(0);
});