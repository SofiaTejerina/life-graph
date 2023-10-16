import App from './app.js';

async function main() {
    const app = new App();
    await app.listen();
}

main().catch((err) => console.error('Error trying to start the server!', err));
