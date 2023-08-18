const fs = require('fs');
const csvParser = require('csv-parser');
const readline = require('readline');
const { promisify } = require('util');

const inputFilePath = './players_data.csv';
const outputFilePath = './moneyball_output.txt';

const writeFileAsync = promisify(fs.writeFile);

const filteredPlayers = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const position = 'GK'; // player position
const minOverall = 60; // minimum overall rating
const minPotential = 75; // minimum potential rating
const maxPrice = 5000000; // maximum price

rl.question('Enter the desired player position: ' + position, () => {
    rl.question('Enter the minimum overall rating: ' + minOverall, () => {
        rl.question('Enter the minimum potential rating: ' + minPotential, () => {
            rl.question('Enter the maximum price: ' + maxPrice, () => {
                const readStream = fs.createReadStream(inputFilePath);

                readStream.on('error', (err) => {
                    console.error('Error reading CSV file:', err);
                    rl.close();
                });

                readStream.pipe(csvParser())
                    .on('data', (row) => {
                        const playerPosition = row.Position;
                        const overall = parseInt(row.Overall);
                        const potential = parseInt(row.Potential);
                        const value = parseInt(row.Value); 
                        const age = parseInt(row.Age);

                        if (
                            playerPosition === position &&
                            overall >= minOverall &&
                            potential >= minPotential &&
                            value <= maxPrice
                        ) {
                            filteredPlayers.push({ name: row.Name, overall, potential, value, age }); 
                        }
                    })
                    .on('end', async () => {
                        filteredPlayers.sort((a, b) => {
                            const potentialA = a.potential;
                            const potentialB = b.potential;
                            return potentialB - potentialA;
                        });

                        const filteredPlayerInfo = filteredPlayers.map(player => {
                            const formattedValue = player.value.toLocaleString(); 
                            return `${player.name} - Overall: ${player.overall}, Potential: ${player.potential}, Age: ${player.age}, Value: ${formattedValue}`;
                        });

                        const outputData = filteredPlayerInfo.join('\n');
                        try {
                            await writeFileAsync(outputFilePath, outputData);
                            console.log('Output file written successfully.');
                        } catch (err) {
                            console.error('Error writing output file:', err);
                        }

                        console.log('Moneyball analysis complete.');
                        rl.close();
                    });
            });
        });
    });
});
