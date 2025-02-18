# Unexpected Null Return in Addition Function

This repository demonstrates a common JavaScript error involving unexpected null returns when working with null values in a simple addition function.

The `foo` function in `bug.js` is intended to add two numbers. However, it returns null if either of the input arguments is null, even if the other argument is a valid number.

The `bugSolution.js` file offers a corrected version of the `foo` function that handles null values more appropriately, returning the other number if only one is null and throwing an error if both are null.

## How to reproduce the bug
1. Clone the repository.
2. Open `bug.js`.
3. Run the JavaScript code using a Node.js environment or a web browser's console.
4. Observe that the function returns `null` even when only one parameter is null.

## Solution
The solution provided in `bugSolution.js` addresses the issue by explicitly checking for null values and handling them appropriately. Instead of returning null, the improved function returns the other number if one is null. If both are null, it throws an appropriate error.
