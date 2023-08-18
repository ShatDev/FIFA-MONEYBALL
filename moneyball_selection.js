const fs = require('fs');
const readline = require('readline');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    try {
        const outputFilePath = './selected_players.txt';
        const outputFileStream = fs.createWriteStream(outputFilePath);

        const outputFileContent = await readFileAsync('./moneyball_output.txt', 'utf8');
        const players = outputFileContent.split('\n').filter(Boolean);

        if (players.length === 0) {
            console.log('No players found in the output file.');
            return;
        }

        rl.question('Enter the number of players you are searching for: ', (numPlayers) => {
            const numPlayersToSearch = parseInt(numPlayers);

            rl.question('Enter your budget: ', (budget) => {
                const maxBudget = parseInt(budget);

                const selectedPlayers = [];
                let totalCost = 0;

                while (selectedPlayers.length < numPlayersToSearch) {
                    const randomIndex = Math.floor(Math.random() * players.length);
                    const playerInfo = players[randomIndex].match(/^(.*?) - Overall: (\d+), Potential: (\d+), Age: (\d+), Value: ([\d,]+)/);

                    if (playerInfo) {
                        const playerValueInEuro = parseInt(playerInfo[5].replace(/,/g, ''));

                        if (playerValueInEuro <= maxBudget - totalCost) {
                            selectedPlayers.push(playerInfo[0]);
                            totalCost += playerValueInEuro;
                        }
                    }
                }

                console.log(`Randomly selected players within budget of ${maxBudget} Euros:`);
                selectedPlayers.forEach(playerInfo => {
                    // console.log(playerInfo); // Display the selected players on console
                    outputFileStream.write(playerInfo + '\n'); // Write to the output file
                });

                outputFileStream.end(); // Close the output file stream
                console.log(`Results written to ${outputFilePath}.`);
                rl.close();
            });
        });
    } catch (err) {
        console.error('Error reading the output file:', err);
    }
}

main();