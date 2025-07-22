const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
const ROLES_list = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');



router.route('/')
    .get(employeesController.getAllEmployees)
    .post(verifyRoles(ROLES_list.Admin, ROLES_list.Editor), employeesController.createNewEmployee)
    .put(verifyRoles(ROLES_list.Admin, ROLES_list.Editor), employeesController.updateEmployee)
    .delete(verifyRoles(ROLES_list.Admin), employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;