var mockStudentData=require("./mockStudentData.json");

module.exports = function(app){
    app.get('/api/students', function (req, res) {
        res.send(mockStudentData)
    })

    app.post('/api/student', function (req, res) {
        mockStudentData.push(req.body);
        res.send("200")
    })

    app.delete('/api/student/:id', function (req, res) {
        mockStudentData=mockStudentData.filter(i=>i.id != req.params.id)
        res.send("DELETED!")
    })

    app.put('/api/student/:id', function (req, res) {
        var result=mockStudentData.find(i=>i.id === req.params.id);
        Object.assign(result, req.body);
        res.send("201")
    })
}
