### README.md for Cuba News Aggregator

---

## Overview

Cuba News Aggregator is a React-based web application designed to gather and display news articles from various independent Cuban news sources. This aggregator simplifies access to a range of articles by pulling RSS feeds and displaying them in a user-friendly interface.

## Features

- **News Aggregation**: Automatically fetches and updates news articles from sources like Diario de Cuba, CiberCuba, ADN Cuba, 14yMedio, El Toque, and El Estornudo.
- **Responsive Design**: Fully responsive layout that adapts well to both desktop and mobile devices.
- **Search Functionality**: Users can search through the aggregated articles based on keywords.
- **Dynamic Content Loading**: Implements lazy loading for efficient data fetching and rendering.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/antonio-galeano/Cuba_News_Aggregator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cuba_news_aggregator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For styling and responsive design.
- **Axios**: For making HTTP requests to fetch RSS feeds.
- **Lazy Loading**: Implemented to optimize content loading.

## Files and Directories

- `index.html`: Entry point of the application.
- `App.jsx`: Root React component.
- `Home.jsx`: Handles the main page view and data fetching logic.
- `Header.jsx`: Contains the navigation and search bar.
- `News.jsx`: Component for displaying news articles.
- `styles.css`, `App.css`, `index.css`: CSS files for styling.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the LICENSE file for details.