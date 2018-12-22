import React, { useState } from 'react';
import ResourceList from './components/resourceList';
import './App.css';

const App = () => {
  const [ resource, setResource ] = useState('posts');

  return (
    <>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>

      <ResourceList resource={resource} />
    </>
  )
}

export default App;