const generateTeamPage = (myTeam) => {
    console.log(myTeam);
    // Empty array to push html elements and loop through team data
    const html = [];
    // Functions for each team member -- need these to return html data
    const generateManager = manager => {
        console.log(manager);
        const managerHtml = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h3>${manager.name}<br></h3>
                <h5><i class="fas fa-mug-hot"></i>Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerHtml);
    }

    const generateEngineer = engineer => {
        console.log(engineer);
        const engineerHtml = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h3>${engineer.name} <br></h3>
                <h5><i class="fas fa-glasses"></i>Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.gitHubUsername}"> ${engineer.gitHubUsername}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHtml);
    }

    const generateIntern = intern => {
        console.log(intern);
        const internHtml = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h3>${intern.name} <br></h3>
                <h5><i class="fas fa-user-graduate"></i>Intern</h5> 
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHtml);
    }

    // Create loop for all employees
    for (let i = 0; i < myTeam.length; i++) {
        if (myTeam[i].getRole() === "Manager") {
            generateManager(myTeam[i]);
        }
        if (myTeam[i].getRole() === "Engineer") {
            generateEngineer(myTeam[i]);
        }
        if (myTeam[i].getRole() === "Intern") {
            generateIntern(myTeam[i]);
        }
    }

    // Join the HTML sections
    return html.join('');
}

// Export function
module.exports = myTeam => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        ${generateTeamPage(myTeam)} 
    </main>
</body>
</html>
`;
}