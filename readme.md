# linear-classification-visualization

This is a simple visualization of linear classification using p5.js. It allows you to add points, calculate a best-fit line, and make guesses to compare against the computed line, displaying a score based on the accuracy of the guess.

## Table of Contents

- [linear-classification-visualization](#linear-classification-visualization)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Using the p5.js Web Editor](#using-the-p5js-web-editor)
    - [Setting Up Locally](#setting-up-locally)
  - [Usage](#usage)
  - [Example](#example)

## Installation

### Using the p5.js Web Editor

1. Go to the [p5.js Web Editor](https://editor.p5js.org/).
2. Create a new sketch.
3. Add a new file named `LinearClassification.js` and paste the library code into it.

### Setting Up Locally

1. Create a new folder for your project.
2. Inside this folder, create a `sketch.js` file and a `LinearClassification.js` file.
3. Copy the library code into `LinearClassification.js`.

## Usage

1. Include the p5.js library and the `LinearClassification.js` library in your project.
2. Instantiate the `LinearClassification` class in your `sketch.js` file.
3. Use the methods provided by the library to add points, calculate the line, and guess the line.

## Example

**sketch.js**

```javascript
let linearClassification;

function setup() {
	linearClassification = new LinearClassification(800, 600);
}

function draw() {
	linearClassification.render();
}

function mousePressed() {
	linearClassification.mousePressed(mouseX, mouseY);
}
```
