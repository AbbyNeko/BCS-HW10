const inquirer = require("inquirer");
const fs = require("fs");

//all classes
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const teamMembersArr = [];
const employeePrompts = [
    {
       type: "input",
       name: "name",
       message: "What is your name?"
    }, {
        type: "number",
        name: "id",
        message: "What is your Employee ID?"
     }, {
        type: "input",
        name: "email",
        message: "What is your work email address?"
     }, {
        type: "list",
        name: "role",
        message: "What is your role within the company?",
        choices: [
            "Engineer",
            "Manager",
            "Intern"
        ]
     }
];

function buildTeam() {

    inquirer
    .prompt(employeePrompts).then(function({name, id, email, role}) {

        let newTeamMember = false;
        //console.log(role);

    //prompt for role specific questions and create class based on Role selected
        switch(role) {
            case "Engineer":
                createEngineerClass(name, id, email);
                break;
            case "Manager":
                createManagerClass(name, id, email);
                break;
            case "Intern":
                createInternClass(name, id, email);
        }

    });

}

//Asks if you want to add on more team members. 
function addOnMoreMembers() {

    inquirer.prompt({
        type:"confirm",
        name: "more",
        message: "Do you want to add on more members to your team?"
    }).then(function({more}) {

        //Adds on next member if Y
        if(more) {
            console.log("Add on the next member");
            buildTeam();
        //Creates Team Page if N
        } else {
            console.log("Okay! Team is built. Generating team page.");
            //Create team.html file using array of team members
            createTeamPage(teamMembersArr);
        }

    });

}


function createTeamPage(teamMembersArr) {

    //console.log("team members - "+JSON.stringify(teamMembersArr));
    let newFileContents =  JSON.stringify(teamMembersArr);

    fs.writeFile("./output/team.json", newFileContents, function(err) {

        if (err) {
        return console.log(err);
        }

        console.log("Success!");

    });

}

function createEngineerClass(name, id, email) {

        inquirer.prompt({
            type: "input",
            name: "github",
            message: "What is your Github Username?"
        }).then(function({github}) {

            let newMember = new Engineer(name, id, email, github);
            teamMembersArr.push(newMember);

            addOnMoreMembers();

        });

}

function createManagerClass(name, id, email) {

    inquirer
    .prompt({
        type: "input",
        name: "officenumber",
        message: "What is your office phone number?"
    }).then(function({officenumber}) {

        let newMember = new Manager(name, id, email, officenumber);
            teamMembersArr.push(newMember);

            addOnMoreMembers();

    });

}

function createInternClass(name, id, email) {

    inquirer
    .prompt({
        type: "input",
        name: "school",
        message: "What school did you go to?"
    }).then(function({school}) {

        let newMember = new Intern(name, id, email, school);
            teamMembersArr.push(newMember);

            addOnMoreMembers();

    });

}

buildTeam();