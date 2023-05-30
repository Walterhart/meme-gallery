# Cat Meme Generator

This Cat Meme Generator is a web application that allows users to select an emotion and generate a cat image based on that emotion. The application utilizes JavaScript to handle the dynamic behavior and interactions.

## Features

- Emotion Selection: Users can choose an emotion from a list of radio buttons, which dynamically updates the selected emotion.
- Highlighting Selected Emotion: The selected emotion is visually highlighted by adding a "highlight" class to the parent element of the radio button.
- Generating Cat Image: Clicking the "Get Image" button generates a cat image based on the selected emotion. If there is only one cat that matches the selected emotion, the corresponding image is displayed. Otherwise, a random cat image from the matching cats is shown.
- Filtering Options: Users can also choose to only display cat images that are GIFs by selecting the "GIFs Only" checkbox.

## Project Structure

The project consists of the following JavaScript files:

- `index.js`: Contains the main functionality of the Cat Meme Generator, including event listeners, rendering cat images, and handling emotion selection.
- `data.js`: Contains the cats data used by the application, including information about cat images, emotions, and GIF status.

## Running the Application

To run the Cat Meme Generator, follow these steps:

1. Clone the project repository.
2. Open the project directory in a web browser.
3. Interact with the application by selecting an emotion, checking the "GIFs Only" option, and clicking the "Get Image" button.

## Acknowledgments

The Cat Meme Generator project is inspired by the love for cats and the desire to create fun and interactive web applications.
