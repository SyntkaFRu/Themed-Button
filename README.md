# Themed-Button

Themed-Button is a React.js project that showcases a customizable Button component styled with Tailwind CSS. This repository provides documentation on how to implement and use the Button component, along with examples demonstrating various button variations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Button Variants](#button-variants)
- [Button Sizes](#button-sizes)
- [Button Colors](#button-colors)
- [Customizing the Button](#customizing-the-button)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with Themed-Button_App, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/SyntkaFRu/Themed-Button
cd Themed-Button
npm install
```

Ensure that you have Node.js and npm installed on your system.

## Usage

After installing the dependencies, you can start the development server:

```bash
npm run dev
```

This will launch the application, and you can view it in your browser at `http://localhost:3000`.

## Button Variants

The Button component supports multiple variants to suit different use cases. You can specify the variant using the `variant` prop. The available variants are:

- `filled`: A solid button with background color.
- `outlined`: A button with a border and transparent background.
- `text`: A button with no background or border.

Example usage:

```jsx
import Button from './components/Button';

function App() {
  return (
    <div className="flex space-x-4">
      <Button variant="filled">Filled Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
    </div>
  );
}

export default App;
```

## Button Sizes

The Button component comes in three sizes: `sm` (small), `md` (medium), and `lg` (large). You can set the size using the `size` prop.

Example usage:

```jsx
import Button from './components/Button';

function App() {
  return (
    <div className="flex space-x-4">
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  );
}

export default App;
```

## Button Colors

You can customize the color of the Button component using the `color` prop. The available colors are based on Tailwind CSS color classes, such as `blue`, `red`, `green`, `amber`, etc.

Example usage:

```jsx
import Button from './components/Button';

function App() {
  return (
    <div className="flex space-x-4">
      <Button color="blue">Blue Button</Button>
      <Button color="red">Red Button</Button>
      <Button color="green">Green Button</Button>
      <Button color="amber">Amber Button</Button>
    </div>
  );
}

export default App;
```

## Customizing the Button

The Button component is designed to be easily customizable. You can extend or override the default styles by applying additional Tailwind CSS classes or by modifying the component's props.

Example of adding custom styles:

```jsx
import Button from './components/Button';

function App() {
  return (
    <div className="flex space-x-4">
      <Button className="bg-purple-500 hover:bg-purple-700 text-white">
        Custom Purple Button
      </Button>
    </div>
  );
}

export default App;
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

*Note: This README file is based on the structure and content of the Button_App repository as of February 28, 2025.*


