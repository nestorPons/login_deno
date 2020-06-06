// 
import {MongoClient} from './deps.ts';

const MONGO_URL = `mongodb://localhost:27017`;
const client = new MongoClient();
client.connectWithUri(MONGO_URL);

const db = client.database('users');

export default db;