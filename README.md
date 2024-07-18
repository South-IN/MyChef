# 🍳 MyChef

Welcome to MyChef! This project is a recipe app that helps users browse through recipes, search for specific recipes, ask AI for recipe suggestions, and save recipes for later.

🌐 [MyChef](https://mychef.onrender.com/)

## Table of Contents

- [📖 About](#about)
- [✨ Features](#features)
- [🛠 Technologies Used](#technologies-used)
- [🚀 Installation](#installation)
- [🧑‍🍳 Usage](#usage)
- [🤝 Contributing](#contributing)
- [📬 Contact](#contact)

## About

MyChef is a comprehensive recipe application designed to make cooking and meal planning easier. It provides a user-friendly interface for exploring a wide variety of recipes and offers advanced features like AI-powered recipe suggestions and a secure system for saving favorite recipes.

## Features

- 🍽 Browse through a wide selection of recipes.
- 🔍 Search for specific recipes.
- 🤖 Ask AI for recipe suggestions using the Gemini AI API.
- 💾 Save recipes for later.
- 📱 Mobile responsive design.
- 🔒 Secure authentication system.

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React.js, Bootstrap, React Material-UI
- **APIs:** Gemini AI API, TheMealDB API

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/MyChef.git
    ```

2. Navigate to the project directory:
    ```sh
    cd MyChef
    ```

3. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

4. Install frontend dependencies:
    ```sh
    cd ../recipe-app
    npm install
    ```

5. Create a `.env` file in the backend directory and add your environment variables:
    ```plaintext
    password=your_password
    DB_URL=your_database_url
    SECRET_KEY=your_secret_key
    ```
   You can get the `DB_URL` from [MongoDB Atlas](https://www.mongodb.com/atlas).

6. Create a `.env` file in the recipe-app directory and add your environment variables:
    ```plaintext
    VITE_API_KEY=your_gemini_api_key
    ```
   You can get the `VITE_API_KEY` from [Gemini API](https://ai.google.dev/gemini-api).

7. Start the backend server:
    ```sh
    cd ../backend
    nodemon server.js
    ```

8. In a new terminal, start the frontend server:
    ```sh
    cd ../recipe-app
    npm run dev
    ```

## Usage

Once the application is running, you can access it at `http://localhost:3000`. Use the website to browse, search, and save recipes. Try out the AI feature for personalized recipe suggestions.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any feature or bug fix you would like to implement.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## Contact

If you have any questions or feedback, feel free to reach out:

- 📧 Email: saurav.codes42@gmail.com
- 💼 LinkedIn: [Saurav Singh](https://www.linkedin.com/in/saurav-singh-228554281/)

Thank you for using MyChef!
