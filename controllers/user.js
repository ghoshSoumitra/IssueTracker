const Project = require('../models/project');
const Issue = require('../models/issue');


// Home page - shows a list of projects
module.exports.home=async (req, res) => {
    try {
      const projects = await Project.find();
      res.render('index', { projects });
    } catch (error) {
      res.render('error', { message: 'Error fetching projects' });
    }
  };

  // Create a new project
  module.exports.createProjecct=(req, res) => {
    res.render('create-project');
  };


  //enlisting the project
module.exports.enlistProject= async (req, res) => {
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });
  
    try {
      const savedProject = await project.save();
      res.redirect('/');
    } catch (error) {
      res.render('error', { message: 'Error creating project' });
    }
  };

    // Project detail page - shows a list of issues for the project
  module.exports.projectDetails=async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      const issues = await Issue.find({ project: project._id });
      res.render('project', { project, issues });
    } catch (error) {
      res.render('error', { message: 'Error fetching project' });
    }
  };

    // Create a new issue for a project
  module.exports.createIssue= async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      const author = req.query.author || '';
      res.render('create-issue', { project, author });
    } catch (error) {
      res.render('error', { message: 'Error fetching project' });
    }
  };

  //for displaying the list of issues
module.exports.issueList= async (req, res) => {
    const issue = new Issue({
      title: req.body.title,
      description: req.body.description,
      labels: req.body.labels,
      author: req.body.author,
      project: req.params.id,
    });
  
    try {
      const savedIssue = await issue.save();
      res.redirect(`/projects/${req.params.id}`);
    } catch (error) {
      res.render('error', { message: 'Error creating issue' });
    }
  };


  //deleting a project
  module.exports.delete= async (req, res) => {
    try {
      await Project.deleteOne({ _id: req.params.id });
      res.redirect('/');
    } catch (error) {
      res.render('error', { message: 'Error deleting project' });
    }
  };
