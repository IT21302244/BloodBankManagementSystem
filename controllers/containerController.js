const Container = require('../models/container');


exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const { containerno, fullname, age, bloodType, date,} = req.body;

    
    const container = new Container({
        containerno,
        fullname,
        age,
        bloodType,
        date
        
    })
    // save container in the database
    container
        .save()
        .then(() => {
            res.status(201).send({message : "Container Registered Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while registering the container"
            });
        });
}



//Retrieve and return all container
exports.findAll = (req,res) => {
    Container.find()
            .then(container => {
                res.send(container)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retrieving container information" })
            })
}

//Retrieve and return a single container
exports.findOne = (req,res) => {
    if(req.params.id){
        const id = req.params.id;

        Container.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Container not found with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving container with id " + id})
            })
    }
}

//Update a container by container id
exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Container.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update container with ${id}. Maybe container not found!`})
            }else{
                res.status(201).send({message : "Container details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating container information"})
        })
}

//Delete a container by container id
exports.delete = (req,res) => {
    const id = req.params.id;

    Container.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot delete container with ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Container details deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting container with id = ${id}`});
        })
}