import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
    
};

const addBlogPost = () => {
    dispatch({ type: 'add_blogPost' });
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);