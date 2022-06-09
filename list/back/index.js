require('./models/db');
const cors = require('cors');
const express = require('express');
const app = express();



const employeeModel = require('./models/employee');


app.use(express.json());
app.use(cors());

app.post('/insert', async (req, res) => {
    const name = req.body.name
    const surname = req.body.surname
    const email = req.body.email
    const position = req.body.position

    const employee = new employeeModel({name: name, surname: surname, email: email, position: position});
    try {
        await employee.save();
    } catch (err) {
        console.log(err);
    }
});

app.get('/read', async (req, res) => {
    employeeModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    })
});

app.get("/view/:id",async(req,res)=>{
    employeeModel.findById({_id:req.params.id},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
})

app.put('/update/:id', async (req, res) => {
    
    const newName = req.body.newName
    const newSurname = req.body.newSurname
    const newEmail = req.body.newEmail
    const newPosition = req.body.newPosition
    try {
       const updateEmployee = await employeeModel.updateMany({_id:req.params.id},{
           $set: {
            name: newName,
            surname: newSurname,
            email: newEmail,
            position: newPosition
           }})
        res.send({updateEmployee, message:"Employee data updated successfully!"})
    } catch (err) {
        console.log(err);
    }
});

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await employeeModel.findByIdAndRemove({_id:id}).exec();
    res.send("Employee deleted Successfully!");
});

app.listen(3001, () => {
    console.log('Express server started at port : 3001');
});
