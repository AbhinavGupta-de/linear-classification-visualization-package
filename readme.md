# linear-classification-visualization

This is a simple visualization of linear classification using p5.js. It allows you to add points, calculate a best-fit line, and make guesses to compare against the computed line, displaying a score based on the accuracy of the guess.

## Table of Contents

- [linear-classification-visualization](#linear-classification-visualization)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Using npm](#using-npm)
  - [Usage](#usage)
  - [Example](#example)

## Installation

### Using npm

1. Create a new directory for your project and navigate to it:

   ```bash
   mkdir my-linear-classification-project
   cd my-linear-classification-project
   ```

2. Initialize a new Node.js project:

   ```bash
   npm init -y
   ```

3. Install the `linear-classification-visualization` package and `p5`:

   ```bash
   npm install linear-classification-visualization p5
   ```

## Usage

1. Include the p5.js library and the `index.js` library in your project.
2. Instantiate the `index` class in your `sketch.js` file.
3. Use the methods provided by the library to add points, calculate the line, and guess the line.

## Example

**sketch.js**

```javascript
let index;

function setup() {
	index = new index(800, 600);
}

function draw() {
	index.render();
}

function mousePressed() {
	index.mousePressed(mouseX, mouseY);
}
```
