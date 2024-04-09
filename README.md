# Language Switcher with Context - React App

This is a simple React application that demonstrates a language switcher using context to toggle between English and Indonesian languages.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd language-switcher-react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to http://localhost:5173 to view the app.

3. Click the "Switch Language" button in the header to toggle between English and Indonesian languages.

## Folder Structure

The project structure is organized as follows:

```bash
/language-switcher-react-app
  /src
    /components
      HeaderPage.jsx
      MainContent.jsx
    /contexts
      LanguageContext.js
    App.js
    index.js
```

## Components

### Header

The Header component contains the app's header, including the "Switch Language" button.

### MainContet

The MainContent component displays the content text in the currently selected language.

## Context

The LanguageContext provides the language state and toggle function to the components that need access to the language context.

## Technologies Used

- React
- React Context API

## Contributors

[Willy Hardian](https://github.com/willyhardian)

## License

This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE.md) file for details.
