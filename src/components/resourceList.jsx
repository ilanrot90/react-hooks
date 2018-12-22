import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resource) => {
    const [ resources, setResources ] = useState([]);
    
    const updateList = async () => {
        const url = 'https://jsonplaceholder.typicode.com';
        const { data } = await axios.get(`${url}/${resource}`);
        
        setResources(data);
    }
    
    useEffect(() => {
        updateList()
    }, [resource]);

    return resources;
}

const ResourceList = ({resource}) => {
    const resources = useResources(resource);

    return (
      <ol>
        { resources.map(resource => <li key={resource.id}>{resource.title}</li>) }
      </ol>
    )
}

export default ResourceList;