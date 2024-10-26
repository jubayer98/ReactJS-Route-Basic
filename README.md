# Cricket Manager

**Live Demo:** [Cricket Manager Demo](https://deluxe-cannoli-e6823a.netlify.app/)

## Project Description

**Cricket Manager** is a web-based application designed for managing cricket players. It allows users to add free credits, view player data from a JSON file in a grid template, and select or remove players from a selection section. This project provides a seamless experience with a dynamic UI where users can interact with player information and manage their selections easily.

## Key Features

- **Fetch JSON Data**: Loads player data from a JSON file and displays it in an interactive grid format.
- **React State Management**: Utilizes React’s `useState` hook to manage data dynamically, ensuring that updates to selections and credit allocations are handled efficiently.
- **Props Passing**: Implements React props to facilitate data flow between components, making it easier to handle user selections and updates.

## Technologies Used

- **ReactJS**: For building a responsive and dynamic user interface.
- **Tailwind CSS**: For rapid styling and a customizable CSS framework.
- **DaisyUI**: A Tailwind CSS component library for pre-built, accessible UI components.
- **JSON**: As the data source format for player information.

### Usage

1. **Add Free Credit**: Increase your free credits by clicking the "Add Credit" button.
2. **View Player Data**: Player data is fetched from a JSON file and displayed in a grid layout. 
3. **Select and Deselect Players**: Choose players to add them to the "Selected Players" section or remove them as desired.

## Features

1. **Fetch JSON Data**  
   The application fetches data from a local JSON file containing player information. This data is then displayed in a dynamic grid format, with each player rendered in a styled card.

2. **React State Management with useState**  
   The project leverages `useState` to manage credits, selected players, and other UI states. This ensures that when a player is selected or deselected, the app updates automatically.

3. **Props Passing**  
   Props are passed between components to maintain data flow and separation of concerns. For example, player data and actions are passed from the main grid component to individual player cards and the selection section.

## Contributing

We welcome contributions to enhance Cricket Manager!
