const basicServer = require('../utils/basic-server');
const serviceName = 'Messaging service';
const {app, logger} = basicServer(serviceName, './out.txt');
const port = process.env.PORT;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`${serviceName} -  http://localhost:${port}`));
