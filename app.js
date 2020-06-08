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

    let newFileContents = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
        <title>Our Team</title>
    
        <style>
            .header {
                background-color: blue;
                color:white;
                display: block;
                width: 100% !important;
            }
    
            .card-title {
                font-weight: bold;
                font-size: 2em;
            }
    
            .card-subtitle {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
    
    <div class="header pt-5 pb-4 pl-3">
        <h1 class="text-centered">Meet the Team</h1>
    </div>
    
    <div class="container"><div class="row mt-5 m-0">`;

    //looping through team
    teamMembersArr.forEach(function(member) {

        newFileContents += `<div class="col-sm-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${member.name}</h5>`;

        if(member.officeNumber != undefined) {

            newFileContents += `<h6 class="card-subtitle mb-3">Manager</h5>
            <p class="card-text"><strong>ID:</strong> ${member.id}<br/><strong>Email:</strong> ${member.email}<br/><strong>Office Number:</strong> ${member.officeNumber}</p>
                </div>
                </div>
            </div>`;

        }else if(member.github != undefined) {

            newFileContents += `<h6 class="card-subtitle mb-3">Engineer</h5>
            <p class="card-text"><strong>ID:</strong> ${member.id}<br/><strong>Email:</strong> ${member.email}<br/><strong>GitHub:</strong> ${member.github}</p>
                </div>
                </div>
            </div>`;

        } else if(member.school != undefined) {

            newFileContents += `<h6 class="card-subtitle mb-3">Intern</h5>
            <p class="card-text"><strong>ID:</strong> ${member.id}<br/><strong>Email:</strong> ${member.email}<br/><strong>School:</strong> ${member.school}</p>
                </div>
                </div>
            </div>`;

        }

    });

    //adding on end of file
    newFileContents += `</div>
    
    </div>
    
    </body>
    </html>`;

    fs.writeFile("./output/team.html", newFileContents, function(err) {

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