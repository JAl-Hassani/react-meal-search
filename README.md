# RecipeSearch!

RecipeSearch! is a front-end web application built with **React JS** and **Tailwind CSS**. It allows users to search for recipes, view detailed information about each recipe, and explore random recipes.

## Features

- **Search Recipes**: Users can search for recipes by name using the search bar.
- **Random Recipes**: Displays six random recipes on the home page when no search is performed.
- **Recipe Details**: Clicking on a recipe card navigates to a detailed page with:
  - Full recipe instructions.
  - Ingredients and their measurements in a table.
  - Tags associated with the recipe.
  - A link to a YouTube video demonstrating the recipe (if available).
- **Responsive Design**: The application is fully responsive and works seamlessly on different screen sizes.

## Technologies Used

- **React JS**: For building the user interface.
- **React Router**: For navigation and routing between pages.
- **Tailwind CSS**: For styling the application.
- **TheMealDB API**: For fetching recipe data.

## How to Run the Project

1. Clone the repository:
   ```
   git clone https://github.com/your-username/react-recipe-search.git
   cd react-recipe-search
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## API Used
This project uses the TheMealDB API to fetch recipe data. The following endpoints are used:

Search Recipes: https://www.themealdb.com/api/json/v1/1/search.php?s={query}

Random Recipe: https://www.themealdb.com/api/json/v1/1/random.php

## Folder Details
### Components
Header: Contains the navigation bar and search form.

Footer: Displays the footer of the application.

RecipeCard: Displays a single recipe card with a thumbnail, title, and short description.

SearchForm: Handles the search functionality.

### Views
Home: Displays random recipes or search results.

Recipe: Displays detailed information about a selected recipe.

### Layouts
MainLayout: Wraps the application with a consistent header and footer.

## Future Enhancements
Add user authentication to save favorite recipes.
Implement pagination for search results.
Add filters for dietary preferences (e.g., vegetarian, vegan, gluten-free).
Improve error handling and display user-friendly messages.

Happy Cooking! 🍳