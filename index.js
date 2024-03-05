const JsonServer =require('json-server')
const mpServer =JsonServer.create()
const middleWare =JsonServer.defaults()
const router =JsonServer.router('db.json')
PORT = 3000 ||process.env.PORT
mpServer.use(middleWare)
mpServer.use(router)
mpServer.listen(PORT,()=>{
    console.log("runing in 3000");
})