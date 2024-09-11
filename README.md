
# Chinese Text Converter CLI

A command-line tool for converting text files between Simplified Chinese and Traditional Chinese. This tool is designed for users who need to batch-process text files in a directory or convert a single file easily from the terminal.

## Features

- Converts text from **Simplified Chinese** to **Traditional Chinese**.
- Converts text from **Traditional Chinese** to **Simplified Chinese**.
- Handles both **single files** and **entire directories**.
- Simple command-line interface for quick use.

## Prerequisites

- **Node.js** installed on your machine. You can download and install it from [Node.js official website](https://nodejs.org/).

## Installation

1. Clone the repository from GitHub.

```bash
git clone https://github.com/wjy8023tvxq/chinese-converter.git
cd chinese-converter
```

2. Install the necessary dependencies.

```bash
npm install
```

3. Link the command globally to make it accessible from anywhere.

```bash
npm link
```

This will create a global command `chn-convert` that you can use to run the tool from anywhere in your terminal.

## Usage

You can use the `chn-convert` command to convert text files between Simplified and Traditional Chinese.

### Converting a Single File

To convert a single file from Simplified Chinese to Traditional Chinese:

```bash
chn-convert -s <path-to-file> -t
```

For example:

```bash
chn-convert -s ./test_files/test.txt -t
```

This will convert the `test.txt` file to Traditional Chinese.

To convert from Traditional Chinese to Simplified Chinese:

```bash
chn-convert -s ./test_files/test.txt -f
```

### Converting All Files in a Directory

To convert all text files in a directory from Simplified Chinese to Traditional Chinese:

```bash
chn-convert -s <path-to-directory> -t
```

For example:

```bash
chn-convert -s ./test_files -t
```

This will convert all files in the `test_files` directory to Traditional Chinese.

To convert from Traditional Chinese to Simplified Chinese:

```bash
chn-convert -s ./test_files -f
```

### Command-Line Options

- `-s, --source <path>`: Path to the source file or directory.
- `-t, --to-traditional`: Convert from Simplified Chinese to Traditional Chinese.
- `-f, --to-simplified`: Convert from Traditional Chinese to Simplified Chinese.

### Examples

#### Example 1: Convert a Single File

```bash
chn-convert -s ./test_files/file1.txt -t
```

This will convert the `file1.txt` from Simplified to Traditional Chinese.

#### Example 2: Convert All Files in a Directory

```bash
chn-convert -s ./test_files -f
```

This will convert all files in the `test_files` directory from Traditional to Simplified Chinese.

#### Example 3: Batch Conversion in Multiple Directories

You can use a script or terminal commands to batch-convert multiple directories by running `chn-convert` on each one.

## Error Handling

If something goes wrong, the tool provides error messages to help you debug the issue.

- **Missing Source Path**: If you don't provide a valid source directory or file:
  
  ```bash
  Please specify the source directory or file using -s or --source
  ```

- **Missing Conversion Flag**: If neither `-t` nor `-f` is specified:

  ```bash
  Please specify the conversion direction using -t or -f
  ```

- **Invalid Path**: If the source path provided is neither a valid file nor a directory, an error will be shown.

## Development

If you want to modify or extend the tool:

1. Clone the repository:

```bash
git clone https://github.com/wjy8023tvxq/chinese-converter.git
cd chinese-converter
```

2. Install the dependencies:

```bash
npm install
```

3. Edit the `index.js` file to make changes.

4. Use `npm link` to re-link the command after making changes.

5. Run the tool using `chn-convert` in your terminal to test your changes.
