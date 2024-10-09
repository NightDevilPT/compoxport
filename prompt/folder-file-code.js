const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Create a readline interface to prompt for user input
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Recursive function to traverse the directory
function traverseDirectory(dir, fileList = []) {
	const files = fs.readdirSync(dir); // Read the directory contents

	files.forEach((file) => {
		const filePath = path.join(dir, file); // Get full path of file or folder
		const stat = fs.statSync(filePath); // Get file/folder stats

		if (stat.isDirectory()) {
			// If it's a directory, recurse
			traverseDirectory(filePath, fileList);
		} else {
			// If it's a file, add its path and content
			const content = fs.readFileSync(filePath, "utf-8");
			fileList.push({ filePath, content });
		}
	});

	return fileList; // Return the list of files and their content
}

// Function to generate the output file
function generateOutputFile(folderPath) {
	const fileList = traverseDirectory(folderPath); // Get the list of files
	const outputFilePath = "output.txt"; // Set the output file path

	const outputContent = fileList
		.map((file) => {
			return `File Path: ${file.filePath}\n\n${file.content}\n\n`;
		})
		.join("\n");

	fs.writeFileSync(outputFilePath, outputContent); // Write to the output file
	console.log(`Output generated successfully at ${outputFilePath}`);
}

// Prompt the user for a folder path
rl.question(
	"Please provide the folder path to generate CQRS output: ",
	(folderPath) => {
		if (fs.existsSync(folderPath)) {
			generateOutputFile(folderPath); // Generate the output file
		} else {
			console.log(
				"The provided folder path does not exist. Please try again."
			);
		}

		rl.close(); // Close the readline interface
	}
);
