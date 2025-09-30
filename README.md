# Project: E-Shop - A Modern E-commerce Frontend

**Live Demo:** https://ecommerce-website-virid-phi.vercel.app/

---

## Project Overview 📝

E-Shop is a clean, modern, and responsive frontend for an e-commerce website built from the ground up with React.js and styled with the utility-first framework Tailwind CSS. The project focuses on creating a seamless and intuitive user experience by implementing the core functionalities of an online store.

The primary goal was to demonstrate proficiency in building dynamic, component-based user interfaces and managing application state in React. Users can browse a product catalog, search for specific items, add products to a shopping cart, and toggle between a light and dark theme for visual comfort.

---

## Key Features 🚀

* **Product Catalog & Browsing:** Users can view all available products in a clean, grid-based layout. Each product listing provides essential information at a glance.
* **Search Functionality:** A dynamic search bar allows users to filter the product catalog in real-time, making it easy to find specific items.
* **Shopping Cart:** A fully functional shopping cart where users can add items, view their selections, and see a summary of their prospective order.
* **Light & Dark Mode Toggle:** A user-friendly theme switcher that instantly toggles the website's appearance between a light and a dark mode, with the preference saved for a consistent experience.
* **Responsive Design:** The entire application is fully responsive, offering an optimized and consistent user experience across desktops, tablets, and mobile devices, thanks to Tailwind CSS.

---

## Tech Stack & Tools 🛠️

I chose a modern frontend stack to build a fast, maintainable, and visually appealing application.

* **Frontend Library:** React.js (for building a declarative and component-based UI)
* **Styling:** Tailwind CSS (for a utility-first approach to building a custom, responsive design rapidly)
* **Routing:** React Router (for client-side navigation between pages like Home, Product Details, and Cart)
* **State Management:** React Context API (for managing global state like the shopping cart and theme preference without prop-drilling)
* **Icons:** React Icons (for a comprehensive and easy-to-use icon library)

---

## Implementation Details

* **State Management:** The shopping cart and theme state are managed globally using React's Context API. A `CartContext` provides all components with access to the cart's items and functions to add or remove them. Similarly, a `ThemeContext` provides the current theme (light/dark) and a function to toggle it. This approach keeps the component logic clean and avoids passing props down through many levels.

* **Theme Switching:** The dark mode functionality is implemented by adding a `dark` class to the root `<html>` element. Tailwind CSS's `dark:` variant is then used to apply different styles when this class is present. The user's preference is saved to `localStorage` to persist across sessions.


### To intsall all the required dependecies
```
npm install
```
## Start the project
```
npm start
```
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
