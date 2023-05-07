const express=require('express');
const router=express.Router();
const Project = require('../models/project');
const Issue = require('../models/issue');
const controller=require('../controllers/user');
router.get('/',controller.home);
  
  // Create a new project
  router.get('/projects/new',controller.createProjecct);
  
  router.post('/projects', controller.enlistProject);
  
  // Project detail page - shows a list of issues for the project
  router.get('/projects/:id',controller.projectDetails);
  
  // Create a new issue for a project
  router.get('/projects/:id/issues/new',controller.createIssue);
  
  router.post('/projects/:id/issues',controller.issueList);
  
  
  
  router.delete('/projects/:id', controller.delete);
  module.exports=router;