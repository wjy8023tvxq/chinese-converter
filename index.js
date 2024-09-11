#!/usr/bin/env node

// Import commander library for command line argument parsing
const { program } = require("commander");
// Simplified-traditional Chinese conversion tool
const chineseConv = require('chinese-conv');
const fs = require('fs-extra');
const path = require('path');

// Set up command line options
program
  .option('-s, --source <directory>', 'Source directory containing files to convert')
  .option('-t, --to-traditional','Convert from Simplified Chinese to Traditional Chinese') 
  .option('-f, --to-simplified', 'Convert from Traditional Chinese to Simplified Chinese')
  .parse(process.argv);

const options = program.opts();

// Check if a source directory is provided
if (!options.source) {
    console.error('Please specify the source directory using -s or --source');
    process.exit(1);
}
// Check if a conversion direction is specified
if (!options.toTraditional && !options.toSimplified) {
    console.error('Please specify the conversion direction using -t or -r');
    process.exit(1);
}

// Function to convert file content based on provided conversion option
const convertFileContent = (content, toTraditional) => {
    return toTraditional ? chineseConv.tify(content) : chineseConv.sify(content);
};

// Function to process a single file
const processFile = async (filePath, toTraditional) => {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const convertedContent = convertFileContent(content, toTraditional);
      await fs.writeFile(filePath, convertedContent, 'utf8');
      console.log(`Converted: ${filePath}`);
    } catch (err) {
      console.error(`Error processing file: ${err.message}`);
    }
  };
  
  // Function to process files or directories
  const processSource = async (sourcePath, toTraditional) => {
    try {
      const stat = await fs.stat(sourcePath);
  
      if (stat.isDirectory()) {
        // If source is a directory, process all files in the directory
        const files = await fs.readdir(sourcePath);
        for (const file of files) {
          const filePath = path.join(sourcePath, file);
          const fileStat = await fs.stat(filePath);
          if (fileStat.isFile()) {
            await processFile(filePath, toTraditional);
          }
        }
      } else if (stat.isFile()) {
        // If source is a single file, process it directly
        await processFile(sourcePath, toTraditional);
      } else {
        console.error('The source is neither a file nor a directory.');
      }
    } catch (err) {
      console.error(`Error processing files: ${err.message}`);
    }
  };
  
  const sourcePath = path.resolve(options.source);
  
  const toTraditional = !!options.toTraditional;
  
  processSource(sourcePath, toTraditional);