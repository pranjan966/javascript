import { createServer } from "https";
const server = createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on http://localhost:8000');
});