# Moneyball Player Analysis Tool

This script is designed to perform player analysis using the Moneyball concept, helping you filter and select football (soccer) players based on specific criteria such as position, overall rating, potential rating, and value.

# Getting Started
**HOW TO RUN** `moneyball_scout.js`
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


