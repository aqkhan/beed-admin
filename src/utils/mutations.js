import gql from 'graphql-tag';

export const createFarm = gql`
     mutation CreateFarm(
         $name: String!,
         $location:String!,
         $email:String!
       ) {
        createFarm(
            name: $name,
            location:$location,
            email: $email
         ) {
         id
        }
      }
`;

export const UPDATE_FARM = gql `
     mutation updateFarm(
            $id: Int!,
            $name: String!,
            $location:String!,
            $email:String!
        ) {
        updateFarm(
            id: $id,
            name: $name,
            location:$location,
            email: $email
        ) {
            id
        }
      }
 `;

export const GET_SINGLE_FARM = (id) => gql`{
       singleFarm(id:"${id}") {
             name
             id
             location
             email
          }
       }`;

export const listFarms = gql`{
        listFarms{
              name
              id
              location
              email
           }
        }`;

export const DELETE_FARM = gql `
         mutation deleteFarm($id: Int!) {
              deleteFarm(id: $id) {
                    id
               }
         }`;

export const CREATE_PRODUCT = gql`
     mutation iiiiiuu(
         $title: String!,
         $description:String!,
         $thumbnail:String!,
         $price: Float!
       ) {
        createProduct(
            title: $title,
            description: $description,
            thumbnail: $thumbnail,
            price: $price
         ) {
         id
        }
      }
`;


