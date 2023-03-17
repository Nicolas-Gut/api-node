import con from '../db/dbConnection.js'

export const listAllUsers = (callback) => {
  const sql = "SELECT * FROM user;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const showUser = (id, callback) => {
  const sql = "SELECT * FROM user WHERE id = ?;"
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const createUser = (User, callback) => {
  const { nome, idade, email } = User
  // const sql = 'INSERT INTO user SET ?;'
  // const values = { nome, cargahoraria }
  const sql = 'INSERT INTO user (nome, idade, email) VALUES (?, ?, ?);'
  const values = [nome, idade, email]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const deleteUser = (id, callback) => {
  const sql = 'DELETE FROM user WHERE id = ?;'
  const value = [id]
  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export const updateUser = (User, callback) => {
  const { id, nome, idade, email } = User
  const sql = 'UPDATE user SET nome = ?, idade = ?, email = ? WHERE id = ? ;'
  const values = [nome, idade, email, id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log(`DB Error: ${err.sqlMessage}`)
    } else {
      callback(null, result)
    }
  })
}

export default { listAllUsers, showUser, createUser, deleteUser, updateUser }