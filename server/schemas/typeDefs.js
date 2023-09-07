const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    roles: [Role]
    tables: [Table]
    shifts: [Shift]
  }

  type Role {
    _id: ID
    name: String
    hourlyRate: Float
  }
  
  type Shift {
    _id: ID
    date: String
    clockIn: String
    clockOut: String
    breakStart: String
    breakEnd: String
  }
  
  type Menu {
    _id: ID
    item: String
    price: Float 
    ingredients: [String] 
    inStock: Boolean
    quantity: Int
    category: [Category]
  }

  type Table {
    _id: ID
    tableNum: Int
    order: [Menu]
    orderStatus: Boolean
    tip: Float
    date: String
    tableStatus: Boolean
  }

  type Category {
    _id: ID
    name: String
  }

  type Query {
    # Find All
    employees: [Employee]
    menuItems: [Menu]
    categories: [Category]
    roles: [Role]
    shifts: [Shift]
    tables: [Table]
  
    # Find One
    employee(_id: ID!): Employee
    menuItem(_id: ID!): Menu
    category(_id: ID!): Category
    role(_id: ID!): Role
    shift(_id: ID!): Shift
    table(_id: ID!): Table
  }  
`;

module.exports = typeDefs;

// TODO: FINISH MUTATIONS AND QUERIES!!