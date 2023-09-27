import { gql } from '@apollo/client';


export const ADD_SHIFT = gql`
mutation Mutation($clockIn: String!, $currentShift: Boolean, $clockedIn: Boolean) {
  addShift(clockIn: $clockIn, currentShift: $currentShift, clockedIn: $clockedIn) {
    currentShift
    clockedIn
    date
    clockIn
    clockOut
    breakStart
    breakEnd
  }
}
`;

export const UPDATE_SHIFT = gql`
  mutation Mutation($id: ID!, $currentShift: Boolean, $clockedIn: Boolean, $clockIn: String, $clockOut: String, $breakStart: String, $breakEnd: String) {
    updateShift(_id: $id, currentShift: $currentShift, clockedIn: $clockedIn, clockIn: $clockIn, clockOut: $clockOut, breakStart: $breakStart, breakEnd: $breakEnd) {
      _id
      date
      currentShift
      clockedIn
      clockIn
      clockOut
      breakStart
      breakEnd
    }
  }
`;


export const UPDATE_TABLE = gql`
  mutation Mutation($tableNum: Int!, $order: [ID], $orderStatus: Boolean, $tip: Float, $tableStatus: Boolean) {
    updateTable(tableNum: $tableNum, order: $order, orderStatus: $orderStatus, tip: $tip, tableStatus: $tableStatus) {
      _id
      date
      orderStatus
      tableNum
      tableStatus
      tip
      order {
        _id
        item
        price
        ingredients
        inStock
        quantity
        category {
          _id
          name
        }
      }
    }
  }
`;

export const LOGIN_POS = gql`
mutation Mutation($posId: Int!) {
  loginPOS(posID: $posId) {
    employeePOS {
      firstName
      lastName
    }
    token
  }
}`

// TODO: MAKE THIS LOGIN ROUTE WORK FOR HOME PAGE
// Probably going to require a new document in the db for 
// home route customer logins for payment and admin for pos
// export const LOGIN = gql`
// mutation Mutation($posId: Int!) {

// }`

export const UPDATE_MENU = gql`
mutation Mutation($item: String!, $price: Float, $ingredients: [String], $inStock: Boolean, $quantity: Int, $category: [ID]) {
  updateMenu(item: $item, price: $price, ingredients: $ingredients, inStock: $inStock, quantity: $quantity, category: $category) {
    _id
    item
    price
    ingredients
    inStock
    quantity
    category {
      _id
      name
    }
  }
}`