# GadgetHeaven E-commerce Platform

Welcome to GadgetHeaven, your go-to destination for the latest and greatest gadgets. This platform is designed according to a detailed Figma layout and includes a variety of features that enhance the shopping experience.

## Features

- **Structured Navigation Bar**: Includes a logo, brand name, dashboard, and stats without displaying the count of items in the cart and wishlist.
- **Product Categories and Details**: Features multiple categories with at least 10 different gadgets. Each product card displays an image, name, price, and a details button.
- **Dynamic Cart and Wishlist**: Implements the Context API for managing cart and wishlist states with optional LocalStorage for data persistence.
- **Enhanced User Experience**: Includes a sorting feature by price, detailed product pages, and ensures seamless navigation without errors or 404 pages on reload.
- **Interactive Elements**: Utilizes React Rating Stars for product ratings and has buttons for adding items to the cart or wishlist with dynamic disabling of the wishlist button after use.

## Live Website

[Click here to view the live website](https://fanciful-llama-926350.netlify.app/)

## Requirement Document

[Link to requirement document](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

## React Concepts Used

This project incorporates several fundamental React concepts, including:
- Context API
- Local Storage
- React Router for navigation (useLocation, useNavigate)
- Conditional rendering

## Data Handling

- **Context API**: Used for managing global state like cart and wishlist items.
- **Local Storage**: Optionally used for persistent data storage.

## Additional Features

- **Toast Notifications**: Displays notifications for actions like adding items to the cart or wishlist.
- **Dynamic Page Titles and Favicon**: Utilizes react-helmet-async for setting the page title and favicon dynamically.

## Challenges and Enhancements

- **Adaptive UI**: The background color changes according to the Figma design when navigating different pages.
- **Modal Interaction**: Implements a modal that congratulates the user upon making a purchase, with further interactions handled through React Router without page reloads.

## Statistics Page

Features a composed chart that displays price vs. product name, incorporating area and bar data based on prices and scatter data according to ratings.
