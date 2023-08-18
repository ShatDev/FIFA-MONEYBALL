# Moneyball Player Analysis Tool 

This script show how to run the `moneyball_scout.js` and is also designed to perform player analysis using the Moneyball concept, helping you filter and select football (soccer) players based on specific criteria such as position, overall rating, potential rating, and value.

# Getting Started
Clone Repository: Clone this repository to your local machine.

Install Node.js: Make sure you have Node.js installed on your system. You can download it from the official website: Node.js.

Install Dependencies: Open a terminal and navigate to the repository folder. Run the following command to install the required dependencies: `npm install csv-parser readline util`

Run the Script: In the same terminal, run the script using the following command: `node moneyball_scout.js`

Follow Prompts: The script will prompt you to enter various parameters, such as player position, minimum overall rating, minimum potential rating, and maximum price. Enter the required values when prompted.

# Results: 
The script will analyze the player data and filter players based on the provided criteria. The results will be written to an `moneyball_output.txt` file in the same directory.

# Notes
The script reads player data from a CSV file named `players_data.csv`. Make sure the file is in the same directory as the script.

Adjust the parameters (`position`, `minOverall`, `minPotential`, `maxPrice`) and modify the input file path (`inputFilePath`) as needed to match your use case.

The output is written in a human-readable format that includes player name, overall rating, potential rating, age, and value.

The `filtered_players` array can be further sorted or processed to suit your needs.




# Football Player Selection Tool
This script shows how to run the `moneyball_selection.js` and is also designed to help football (soccer) enthusiasts analyze and select players based on specific criteria such as budget, position, and player potential. The tool reads player data from an input file, filters and selects players based on user input, and outputs the results to an external file.

# How It Works
The script reads the player data from a `moneyball_output.txt` file, which contains player information in the following format:
`Player Name - Overall: X, Potential: Y, Age: Z, Value: W`
The user is prompted to enter the number of players they want to select and their budget for player acquisitions.

The script randomly selects players that meet the budget constraint and desired criteria (e.g., potential) and displays the selected players on the console.

The results are written to an external selected_players.txt file in the same format as the input file.

# How to Use
Clone this repository to your local machine.

Install Node.js if you haven't already.

Open a terminal and navigate to the repository folder.

Run the script using the following command: `node moneyball_selection.js`

Follow the prompts to specify the number of players and budget you are working with.

The selected players will be displayed on the console and written to the `selected_players.txt` file.

# Notes
The script uses a simplified player selection logic for illustrative purposes.

The input file should be named `moneyball_output.txt` and follow the specified format.
The `selected_players.txt` file will be created or overwritten in the same directory.
Adjust the input file, output file, and player selection logic as needed for your use case.


;)
