module.exports = {
    name: 'ready',
    execute(client) {
        console.log('The client is ready :)');
        client.user.setActivity('status', { type: 'LISTENING' });
    },
};