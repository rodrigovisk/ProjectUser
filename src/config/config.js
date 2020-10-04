// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-60364f9db1cf4e6c2ee28671141d18e94a0ccce9.cifpwgboai87.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '2_g!~uBfD0f[>kfKjA;gx}q{c:<jPP4l'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}