import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [text, updateText] = useState('');
  const [students, updateStudents] = useState([
    { id: 1, name: 'srinath' },
    { id: 2, name: 'balashiva' },
    { id: 3, name: 'somesh' },
  ]);
  function change(e) {
    e.preventDefault();
    updateStudents((students) => [
      ...students,
      { id: students.length + 1, name: text },
    ]);
    updateText('');
  }
  return (
    <div>
      <ul>
        <h4>ID NAME</h4>
        {students.map((obj) => {
          return (
            <li key={obj.id}>
              {obj.id} {obj.name}
            </li>
          );
        })}
      </ul>
      <form onSubmit={change}>
        <input
          type="text"
          onChange={(e) => {
            updateText(e.target.value);
          }}
          value={text}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
