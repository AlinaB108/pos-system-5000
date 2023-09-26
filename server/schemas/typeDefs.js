const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    posID: Int
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
    currentShift: Boolean
    clockedIn: Boolean
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
    category: Category
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

  type Auth {
    token: ID
    employeePOS: Employee
  }

  type Query {
    # Find All
    employees: [Employee]
    menuItems: [Menu]
    tables: [Table]

    # Find One
    employee(_id: ID!): Employee
    menuItem(_id: ID!): Menu
    table(_id: ID!): Table
    me: Employee
  }

  type Mutation {
    updateMenu(item: String!, price: Float, ingredients: [String], inStock: Boolean, quantity: Int, category: [ID]): Menu
    updateTable(tableNum: Int!, order: [ID], orderStatus: Boolean, tip: Float, tableStatus: Boolean): Table
    addShift(clockIn: String!, clockOut: String, breakStart: String, breakEnd: String, currentShift: Boolean, clockedIn: Boolean): Shift
    updateShift(_id: ID!, currentShift: Boolean, clockedIn: Boolean, clockIn: String, clockOut: String, breakStart: String, breakEnd: String): Shift
    login(email: String!, password: String!): Auth
    loginPOS(posID: Int!): Auth
  }
`;

module.exports = typeDefs;

// TODO: FINISH MUTATIONS AND QUERIES!!