const { networkInterfaces } = require('os');

export const getIP = (): string[] => {

    const nets = networkInterfaces();
    const results = [];
    
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                results.push(net.address);
            }
        }
    }

    return results;

}