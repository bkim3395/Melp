import React from 'react';
import { Link } from 'react-router-dom';

export default ({business}) => {
    return(<Link to={`/business/${business.id}`}>{business.name}</Link>)
}