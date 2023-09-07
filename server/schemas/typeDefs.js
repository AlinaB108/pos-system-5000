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
  
  type Table {
    _id: ID
    tableNum: Int
    order: [Menu]
    orderStatus: Boolean
    tip: Float
    date: String
    tableStatus: Boolean
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

  type Category {
    _id: ID
    name: String
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
  }  

  type Mutation {
    updateTable(tableNum: Int!, order: [ID], orderStatus: Boolean, tip: Float, tableStatus: Boolean): Table
    addShift(clockIn: String!, clockOut: String, breakStart: String, breakEnd: String): Shift
    updateShift(clockIn: String, clockOut: String, breakStart: String, breakEnd: String): Shift
  }
`;

module.exports = typeDefs;

// TODO: FINISH MUTATIONS AND QUERIES!!