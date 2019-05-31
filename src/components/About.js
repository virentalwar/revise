import React, { useState } from 'react';
import ResourceList from './ResourceList';

const About = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="container" style={{ marginTop: '1vh' }}>
      <div>
        <h2>Using Hooks</h2>
        <button className="btn btn-dark" onClick={() => setResource('posts')}>
          Posts
        </button>
        <button
          className="btn btn-dark"
          onClick={() => setResource('todos')}
          style={{ marginLeft: '1vh' }}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default About;
