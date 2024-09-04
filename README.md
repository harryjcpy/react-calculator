# React Calculator

A simple, user-friendly calculator built with React.js. This calculator performs basic arithmetic operations, supports keyboard input, and features an Easter egg animation which you can find out if you are a Dhoni fan.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features
- **Basic Arithmetic Operations**: Perform addition, subtraction, multiplication, and division.
- **Keyboard Input Support**: Use your keyboard to enter numbers and perform calculations.
- **Responsive Design**: The calculator is fully responsive and works on all screen sizes.
- **Easter Egg Animation**: When the result is "7", a special "Thala" animation is triggered on the screen.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/harryjcpy/react-calculator.git
    ```
   
2. **Navigate to the project directory:**
    ```bash
    cd react-calculator
    ```
   
3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```
   
The app will run locally on [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter numbers and select operations (+, -, *, /) to perform calculations.
2. Use the **C** button to clear the display or the **Backspace** key to delete the last character.
3. Press the **Enter** key or click **=** to get the result.
4. If the result of any calculation is "7", enjoy the surprise "Thala" animation.
5. The animation disappears when any new button is pressed.

## Components

### 1. `App.jsx`
- The main component that manages the calculator's state, handles button clicks, and processes keyboard inputs.

### 2. `EasterEgg.jsx`
- A component that renders the "Thala" animation when the result equals "7".

### 3. `Display.jsx`
- A component responsible for showing the current value on the calculator screen.

### 4. `ButtonsContainer.jsx`
- A component containing all calculator buttons and handling user interactions.

### 5. `Heading.jsx`
- A component displaying the calculator's title or heading.

## Technologies Used
- **React.js**: Frontend library for building the user interface.
- **CSS3**: Styling for animations and visual effects.
- **JavaScript (ES6+)**: Logic for managing calculations, keyboard input, and animations.
- **HTML5**: Structuring the application layout.

## Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request. Please ensure that your code follows the project's coding style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Animation inspiration from [Internet Resources].
- React boilerplate template for quick setup.
- Special thanks to all contributors and community members.
