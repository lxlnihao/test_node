const db = require('./db');

// 查询用户
async function getUsers() {
  try {
    const [rows] = await db.query('SELECT * FROM user');
    return rows;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// 添加用户
async function createUser(user) {
  try {
    const [result] = await db.query(
      'INSERT INTO user (username, password, email) VALUES (?, ?, ?)',
      [user.username, user.password, user.email]
    );
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// 更新用户
async function updateUser(id, user) {
  try {
    const [result] = await db.query(
      'UPDATE user SET username = ?, email = ? WHERE id = ?',
      [user.username, user.email, id]
    );
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// 删除用户
async function deleteUser(id) {
  try {
    const [result] = await db.query('DELETE FROM user WHERE id = ?', [id]);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};