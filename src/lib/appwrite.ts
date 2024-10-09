import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('process.env.YOUR_APPWRITE_ENDPOINT')
    .setProject('process.env.YOUR_APPWRITE_PROJECT_ID');

export const account = new Account(client);
export const databases = new Databases(client);

export { client };