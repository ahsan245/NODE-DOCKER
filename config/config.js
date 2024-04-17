
const dbConfig = {
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || 'pass',
    database: process.env.DB_NAME || 'test',
    port: process.env.DB_PORT || '3306'
};
module.exports = { dbConfig };