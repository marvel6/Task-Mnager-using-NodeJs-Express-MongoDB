const express = require('express');
const router = express.Router();
const  {
    AddAllTask,
    updateTask,
    DeleteTask,
    getTask,
    createTask

} = require('../controller/es')

router.route('/').get(AddAllTask).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(DeleteTask)


module.exports = router