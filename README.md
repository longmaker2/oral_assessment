# Oral Assessment - Data Structures & React Components

This repository contains solutions for an oral assessment related to data structures (Linked List manipulation) and React component implementation (Temperature Converter). The project demonstrates proficiency in TypeScript, React, and basic algorithms.

## Repository: [Oral Assessment](https://github.com/longmaker2/oral_assessment.git)

### Contents:

1. **LinkedList Manipulation**
   - TypeScript implementation of a Linked List with methods to add, remove, and find elements.
2. **Temperature Converter**
   - A class-based React component written in TypeScript that converts temperatures between Celsius and Fahrenheit, styled with Tailwind CSS.

---

## LinkedList Manipulation

### Overview:

A custom implementation of a singly linked list using TypeScript. It includes methods for:

- Adding elements to the list
- Removing elements by value
- Finding elements in the list

### Instructions:

1. Clone the repository:
   ```bash
   git clone https://github.com/longmaker2/oral_assessment.git
   ```
2. Navigate to the `linkedList_manipulation` directory.
3. Compile the TypeScript file:
   ```bash
   tsc LinkedList.ts
   ```
4. Run the compiled JavaScript file:
   ```bash
   node LinkedList.js
   ```

### Sample Output:

```
1
2
3
1
3
ListNode { next: ListNode { next: null, value: 3 }, value: 1 }
```

### LinkedList Methods:

- `add(value: T)`: Adds a new node with the given value at the end of the list.
- `remove(value: T)`: Removes the node with the specified value from the list.
- `find(value: T)`: Finds and returns the node with the given value.

---

## Temperature Converter (React + TypeScript)

### Overview:

A React application built with TypeScript that allows users to convert temperatures between Celsius and Fahrenheit. The app is styled using Tailwind CSS and demonstrates handling of state and props using class-based components.

### Features:

- Input a temperature in Celsius or Fahrenheit.
- Dynamically convert between Celsius and Fahrenheit.
- Stylish and responsive UI using Tailwind CSS.

### Instructions:

1. Clone the repository:
   ```bash
   git clone https://github.com/longmaker2/oral_assessment.git
   ```
2. Navigate to the `temperature_converter` directory.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

### Technologies Used:

- **React**: Class-based components
- **TypeScript**: For type safety and structure
- **Tailwind CSS**: For UI styling

---

## Tailwind CSS Setup

Tailwind CSS is used for styling the React components. To use Tailwind CSS:

1. Install Tailwind and dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```
2. Add Tailwind CSS to your `src/index.css` file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Import `index.css` into your `src/index.tsx` file:
   ```tsx
   import "./index.css";
   ```

---

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit the changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

If you have any questions or feedback, feel free to open an issue or contribute to the project.

---

### Author

- **Long Maker Long Deng** - _Software Engineering Student at ALU_
