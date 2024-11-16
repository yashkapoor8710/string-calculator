# String Calculator

This project is a String Calculator application built with React and TypeScript. It allows users to input a string of comma-separated numbers (or numbers with custom delimiters) and calculates their sum. The application supports multiple delimiters, handles newlines between numbers, and throws an error when negative numbers are provided.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Features

- Empty String: Returns 0.
- Single Number: Returns the number itself.
- Multiple Numbers: Supports comma-separated and newline-separated numbers.
- Custom Delimiters: Allows users to define custom delimiters (e.g., //;\n1;2).
- Negative Number Handling: Throws an error with a message listing all negative numbers.

## Installation

To run this project locally, follow these steps:

1. Clone the Repository

### `git clone https://github.com/yourusername/string-calculator.git`

### `cd string-calculator`

2. Install Dependencies

Ensure that you have Node.js and npm installed. Run the following command to install the necessary dependencies:

### `npm install`

3. Run the Development Server

Start the app in development mode:

### `npm start`

This will start the React development server and open the app in your default web browser. You can view it at http://localhost:3000.

## Usage

- Input Numbers: Enter a string of numbers in the input field (comma-separated, newline-separated, or with custom delimiters).
- Click "Calculate": Click the "Calculate" button to get the sum of the numbers.
- View the Result: The sum will be displayed below the input field.

## Examples:

Input: "" (empty string)
Output: 0

Input: "1"
Output: 1

Input: "1,5"
Output: 6

Input: "1\n2,3"
Output: 6

Input: "//;\n1;2"
Output: 3

Input: "1,-2,3"
Output: Error: Negative numbers not allowed: -2

## Testing

1. Unit Tests for Logic

The core functionality is tested using Jest. The following test cases are included:

- Empty String: Returns 0.
- Single Number: Returns the number itself.
- Multiple Numbers: Returns the sum of numbers separated by commas or newlines.
- Custom Delimiters: Supports user-defined delimiters (e.g., //;\n1;2).
- Negative Numbers: Throws an error when negative numbers are passed.

To run the unit tests:

### `npm test`

2. UI Tests

UI tests are written using React Testing Library to simulate user interactions (typing into the input, clicking the button) and verify that the correct result is shown.

To run the UI tests:

### `npm test`

Jest will automatically find and run all tests in your project.

3. Manual Testing

To manually test the app:

- Start the app by running npm start.
- Enter input in the text field and click the "Calculate" button.
- Verify the result displayed on the page, or check for error messages if there are negative numbers.

## Deployment

You can deploy the app to a public URL using services like Vercel, Netlify, or GitHub Pages. Here are some resources to help you with deployment:

- Vercel Deployment Guide
- Netlify Deployment Guide
- GitHub Pages Deployment Guide
