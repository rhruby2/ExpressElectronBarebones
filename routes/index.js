module.exports = function(app){

app.get('/', (req,res) => {
    res.sendFile(process.cwd() + "/index.html")
})

}
