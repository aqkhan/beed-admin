/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFarm = `subscription OnCreateFarm {
  onCreateFarm {
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
export const onUpdateFarm = `subscription OnUpdateFarm {
  onUpdateFarm {
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
export const onDeleteFarm = `subscription OnDeleteFarm {
  onDeleteFarm {
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
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
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
    orders {
      items {
        id
        notes
        user_email
        status
        qty
        delivery_date
        order_total
      }
      nextToken
    }
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
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
    orders {
      items {
        id
        notes
        user_email
        status
        qty
        delivery_date
        order_total
      }
      nextToken
    }
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
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
    orders {
      items {
        id
        notes
        user_email
        status
        qty
        delivery_date
        order_total
      }
      nextToken
    }
  }
}
`;
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
      orders {
        nextToken
      }
    }
    qty
    delivery_date
    order_total
  }
}
`;
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
      orders {
        nextToken
      }
    }
    qty
    delivery_date
    order_total
  }
}
`;
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
      orders {
        nextToken
      }
    }
    qty
    delivery_date
    order_total
  }
}
`;
export const onCreateStore = `subscription OnCreateStore {
  onCreateStore {
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
export const onUpdateStore = `subscription OnUpdateStore {
  onUpdateStore {
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
export const onDeleteStore = `subscription OnDeleteStore {
  onDeleteStore {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
