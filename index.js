const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            name: 'Github_name',
            message: 'Github name',
        },
        {
            name: 'proj_title',
            message: 'Project Title >',
        },
        {
            name: 'description',
            message: 'Description >',
        },
        {
            name: 'table_of_contents',
            message: 'Table of Contents >',
        },
        {   name: 'installation',
            message: 'installation >',
        },
        {
            name: 'usage',
            message: 'usage >',
        },
        {
            name: 'license',
            message: 'license >',
        }, 
        {
            name: 'Contributing',
            message: 'Contributing >',
        },
        {
            type: 'editor',
            name: 'built_with',
            message: 'Built With >',
        },
    ])

    .then(answers => {
        console.info('Answer:', answers);

        /* File Writing */
        var file = fs.createWriteStream('ReadME.md');
        file.on('error',
            function(err) {
                /* error handling */
            }
        );
        for (const [key, value] of Object.entries(answers)) {
            if (key === 'Github_name'){
                file.write('### Github name ###' + '\n\n\n');
            }
            else if (key === 'proj_title'){
                file.write('### Project Title ###' + '\n\n\n');
            }
            else if (key === 'description'){
                file.write('### Description ###' + '\n\n\n');
            }
            else if (key === 'table_of_contents'){
                file.write('### Table of Contents ###' + '\n\n\n');
            }
            else if (key === 'installation'){
                file.write('### Installation ###' + '\n\n\n');
            }
            else if (key === 'usage'){
                file.write('### Usage ###' + '\n\n\n');
            }
            else if (key === 'license'){
                file.write('### License ###' + '\n\n\n');
            }
            else if (key === 'Contributing'){
                file.write('### Contributing ###' + '\n\n\n');
            }
            else if (key === 'built_with'){
                file.write('### Built With ###' + '\n\n\n');
            }
            file.write('\t' + value + '\n\n\n');
        }
        file.end();
    });
