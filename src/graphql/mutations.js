/* eslint-disable */
// this is an auto generated file. This will be overwritten
import gql from 'graphql-tag';

export const createFarm = gql`mutation CreateFarm(
  $input: CreateFarmInput!
  $condition: ModelFarmConditionInput
) {
  createFarm(input: $input, condition: $condition) {
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
export const updateFarm = gql`mutation UpdateFarm(
  $input: UpdateFarmInput!
  $condition: ModelFarmConditionInput
) {
  updateFarm(input: $input, condition: $condition) {
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
export const deleteFarm = gql`mutation DeleteFarm(
  $input: DeleteFarmInput!
  $condition: ModelFarmConditionInput
) {
  deleteFarm(input: $input, condition: $condition) {
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
export const createProduct = gql`mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
export const updateProduct = gql`mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = gql`mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
export const createOrder = `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
    id
    notes
    user_email
    status
    product {
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
    qty
    delivery_date
    order_total
  }
}
`;
export const updateOrder = `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    id
    notes
    user_email
    status
    product {
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
    qty
    delivery_date
    order_total
  }
}
`;
export const deleteOrder = `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
    id
    notes
    user_email
    status
    product {
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
    qty
    delivery_date
    order_total
  }
}
`;
export const createStore = `mutation CreateStore(
  $input: CreateStoreInput!
  $condition: ModelStoreConditionInput
) {
  createStore(input: $input, condition: $condition) {
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
export const updateStore = gql`mutation UpdateStore(
  $input: UpdateStoreInput!
  $condition: ModelStoreConditionInput
) {
  updateStore(input: $input, condition: $condition) {
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
export const deleteStore = gql`mutation DeleteStore(
  $input: DeleteStoreInput!
  $condition: ModelStoreConditionInput
) {
  deleteStore(input: $input, condition: $condition) {
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
export const createUser = gql`mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = gql`mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = gql`mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
