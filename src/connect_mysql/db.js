const mysql = require('mysql2');

// 创建连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Wajiu@123',
  database: 'test_mysql',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 导出 promise 池，支持 async/await
const promisePool = pool.promise();

module.exports = promisePool;