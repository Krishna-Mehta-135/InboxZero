import { Client } from 'pg'

const pgClient = new Client(process.env.PG_URL)

export async function connectDB() {
    try {
        await pgClient.connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

export async function disconnectDB() {
    try {
        await pgClient.end();
        console.log('Database disconnected');
    } catch (error) {
        console.error('Error disconnecting from database:', error);
    }
}

export { pgClient };