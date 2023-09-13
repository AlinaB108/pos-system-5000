import { gql } from '@apollo/client';


export const ADD_SHIFT = gql`
  mutation AddShift($clockIn: String!) {
    addShift(clockIn: $clockIn) {
      clockIn
      clockedIn
      currentShift
      date
      _id
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