# 🚀 UseState Example

> A practical guide to using the useState hook in React for state management

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Hooks](https://img.shields.io/badge/React%20Hooks-State-blue?style=for-the-badge)

---

## 📚 Overview

This repository contains practical examples of using React's `useState` hook for managing component state. Learn how to handle state updates, multiple states, and common patterns.

---

## 🎯 Topics Covered

- ✅ **Basic useState Hook** - Simple state management
- ✅ **Multiple State Variables** - Managing multiple pieces of state
- ✅ **State Updates** - Updating state values
- ✅ **Event Handling** - Handling user interactions
- ✅ **Form State** - Managing form input state
- ✅ **Counter Examples** - Common pattern demonstrations
- ✅ **Conditional Rendering** - Rendering based on state
- ✅ **Performance Tips** - Best practices for state management

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React** | UI Library |
| **JavaScript** | Programming Language |
| **Hooks** | State Management |

---

## 🚀 Quick Start

### Try on StackBlitz
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-hkzmqe)

---

## 💻 Code Examples

### Basic Counter

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
```

### Form State Management

```javascript
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <input 
        type="text" 
        name="name" 
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea 
        name="message" 
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
    </form>
  );
}
```

### Multiple State Variables

```javascript
import { useState } from 'react';

function MultipleStates() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))} 
      />
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible && <p>Hello {name}, you are {age} years old</p>}
    </div>
  );
}
```

---

## 🎨 Key Concepts

### 1. **Syntax**
```javascript
const [state, setState] = useState(initialValue);
```

### 2. **Updating State**
```javascript
// Direct update
setState(newValue);

// Function update (recommended)
setState(prevState => prevState + 1);
```

### 3. **Initial State Function**
```javascript
const [data, setData] = useState(() => {
  return expensiveComputation();
});
```

---

## 📋 Best Practices

✅ Keep state as simple as possible  
✅ Use separate useState for unrelated state  
✅ Use functional update form when new state depends on old  
✅ Avoid mutation of state  
✅ Don't call hooks inside loops, conditions, or functions  
✅ Use custom hooks for reusable logic  

---

## 🚀 Common Patterns

### Toggle Boolean
```javascript
const [isOpen, setIsOpen] = useState(false);
setIsOpen(prev => !prev);
```

### Append to Array
```javascript
const [items, setItems] = useState([]);
setItems(prev => [...prev, newItem]);
```

### Update Object
```javascript
const [user, setUser] = useState({ name: '', email: '' });
setUser(prev => ({ ...prev, name: 'John' }));
```

---

## 📖 Resources

- [React Hooks Documentation](https://react.dev/reference/react/useState)
- [React Official Guide](https://react.dev/)
- [Hooks Best Practices](https://react.dev/reference/rules/rules-of-hooks)

---

## 🤝 Contributing

Contributions welcome! Add more examples and patterns.

---

## 📄 License

MIT License

---

**Master React Hooks and State Management! ⚛️**
