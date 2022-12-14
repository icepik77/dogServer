import postgresql from 'pg';
const { Pool } = postgresql;

const pool = new Pool({
    user:"postgres",
    password: "Dark1271",
    host: "localhost",
    port: 5432,
    database: "postgres"
})

export async function create(nameUser, mail, message){
    
    const user = await pool.query('INSERT INTO user_dog (name, mail, message) values ($1, $2, $3) RETURNING *', [nameUser, mail, message])
    .catch(function(error){
        console.log(error.message)
        return console.log("Ошибка записи в БД")
    })
    .then(result =>{
        return "ok"
    })
    
    
    
    
}

export async function show(){
    
    // await pool.query('SELECT * FROM user_dog', (err, res)=>{
    //     console.log("here")
    //     if (err){
    //         console.log(err.stack)
    //         return err.stack
    //     } else{
    //         console.log(res.rows)
    //         return res.rows
    //     }
    // })
    
    const users = await pool.query('SELECT * FROM user_dog')
    .then(resolve=>{
        return resolve.rows
    }, error =>{
        console.log(error.message)
    })

    return users

    // try {
    //     const users = await pool.query('SELECT * FROM user_dog')
    //     console.log("users:+"+users)
    //     return users 
    // } catch (error) {
    //    console.log(error)
    // }
}

export async function update(name, mail, message, id){
    try {
        const user = await pool.query('UPDATE user_dog set name = $1, mail = $2, message = $3 where id = #4 RETURNING *', [name, mail, message, id])
        return user
    } catch (error) {
        console.log(error)
    }
    
    
}

export async function deleteItem(id){
    try {
        const user = await pool.query('DELETE FROM user_dog where id = $1', [id])
    } catch (error) {
        console.log(error)
    }
    
}


