import gql from 'graphql-tag';

export const GET_POST_CATEGORIES = (id) => gql`{
             categories(type:"${id}") {
                name
                id
                content
                type
                slug
               }
            }`;