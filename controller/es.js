const Tasks = require('../model/tasks') 
const Wrapper = require('../middleware/async')
const {customhandler} = require('../errorHandling/errorHandler')

const AddAllTask = Wrapper(async(req,res) =>{
        const tasks = await Tasks.find({});
        res.status(200).json({tasks})
});

const createTask = Wrapper(async (req,res) =>{
    const Task = await Tasks.create(req.body)
    res.status(201).json(Task)
});

const getTask = Wrapper(async(req,res) =>{
        const {id:TaskID} = req.params;
        const tasks = await Tasks.findOne({_id:TaskID})

         if(!tasks){
            return next(customhandler({msg:`there is no item with id: ${TaskID}`},500))
         }
        res.status(200).json(tasks)
    
    
});

const updateTask = Wrapper(async(req,res) =>{
        const {id:TaskID} = req.params

        const tasks = await Tasks.findOneAndUpdate({_id:TaskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!tasks){
           return next(customHandler({msg:`there is no item with id: ${TaskID}`},500))
        }
        res.status(200).json({tasks})
    
});

const DeleteTask = Wrapper(async(req,res)=>{
     const {id:TaskID} = req.params
     const tasks = await Tasks.findOneAndDelete({_id:TaskID});

    if(!tasks){
        return next(customerHandler({msg:`there is no item with id: ${TaskID}`},500))
    }
     res.status(200).json({tasks})
    
    
});


module.exports = {
    AddAllTask,
    updateTask,
    DeleteTask,
    getTask,
    createTask
}
