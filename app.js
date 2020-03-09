const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const main = require('./lib/questions');
const questions = main.questions;
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const fs = require("fs");
let employees = [];
function createEmployee() {
    console.log("Enter Employee's details:");
    inquirer
    .prompt(questions)
    .then(function(reply) { 
        let newEmployee;
        if((reply.role).toLowerCase() == "manager") 
            newEmployee= new Manager(reply.name, reply.id, reply.email, reply.officeNumber);
        if((reply.role).toLowerCase() == "engineer") 
            newEmployee= new Engineer(reply.name, reply.id, reply.email, reply.github);
        if((reply.role).toLowerCase() == "intern") 
            newEmployee= new Intern(reply.name, reply.id, reply.email, reply.school);
        employees.push(newEmployee);
        if (reply.addEmployee) 
            createEmployee();
        else {
            const teamHtml = render(employees);
            fs.writeFile(outputPath, teamHtml, err => {
                // throws an error, you could also catch it here
                if (err) throw err;
                // success case, the file was saved
                console.log("Created Employee Team!");
            })
        }
    });
}
createEmployee();