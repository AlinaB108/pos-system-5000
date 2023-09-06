const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    roles: [Roles]
    tables: [Table]
    shifts: [Shift]
  }

  type Roles {
    _id: ID
    name: String
    hourlyRate: Number
  }
  
  type Shift {
    _id: ID
    date: Date
    clockIn: Date
    clockOut: Date
    breakStart: Date
    breakEnd: Date
  }
  
  type Table {
    _id: ID
    tableNum: Number
    order: [Menu]
    orderStatus: Boolean
    tip: Number
    date: Date
    tableStatus: Boolean
  }
  

  type Menu {
    _id: ID
    item: String
    price: Number
    ingredients: Array
    inStock: Boolean
    quantity: Number
    category: [Category]
  }

  type Category {
    _id: ID
    name: String
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// TODO: FINISH MUTATIONS AND QUERIES!!