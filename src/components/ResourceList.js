import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return (
    <div style={{ marginTop: '2vh' }}>
      <ul className="list-group">
        {resources.map(record => (
          <li className="list-group-item">{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
