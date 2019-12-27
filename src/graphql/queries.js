
import gql from 'graphql-tag';
export const getFarm = gql`query GetFarm($id: ID!) {
  getFarm(id: $id) {
    id
    name
    email
    location
    products {
      items {
        id
        title
        slug
        description
        price
        thumbnail
      }
      nextToken
    }
  }
}
`;
export const listFarms = gql`query ListFarms(
  $filter: ModelFarmFilterInput
  $limit: Int
  $nextToken: String
) {
  listFarms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      location
      products {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProduct = gql`query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    title
    slug
    description
    price
    thumbnail
    farm {
      id
      name
      email
      location
      products {
        nextToken
      }
    }
  }
}
`;
export const listProducts = gql`query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      slug
      description
      price
      thumbnail
      farm {
        id
        name
        email
        location
      }
    }
    nextToken
  }
}
`;
export const getStore = gql`query GetStore($id: ID!) {
  getStore(id: $id) {
    id
    name
    email
    location
    users {
      items {
        id
        user_name
        first_name
        last_name
        email
      }
      nextToken
    }
  }
}
`;
export const listStores = gql`query ListStores(
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      location
      users {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUser = gql`query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    user_name
    first_name
    last_name
    email
    store {
      id
      name
      email
      location
      users {
        nextToken
      }
    }
  }
}
`;
export const listUsers = gql`query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user_name
      first_name
      last_name
      email
      store {
        id
        name
        email
        location
      }
    }
    nextToken
  }
}
`;
