import { gql } from '@apollo/client';


export const ADD_SHIFT = gql`
  mutation Mutation($clockIn: String!, $clockOut: String, $breakStart: String, $breakEnd: String) {
    addShift(clockIn: $clockIn, clockOut: $clockOut, breakStart: $breakStart, breakEnd: $breakEnd) {
      _id
      breakEnd
      breakStart
      clockIn
      clockOut
      date
    }
  }
`;

export const UPDATE_SHIFT = gql`
  mutation Mutation($id: ID!, $clockIn: String, $clockOut: String, $breakStart: String, $breakEnd: String) {
    updateShift(_id: $id, clockIn: $clockIn, clockOut: $clockOut, breakStart: $breakStart, breakEnd: $breakEnd) {
      _id
      date
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
      orderStatus
      tableNum
      tableStatus
      tip
    }
  }
`;

export const LOGIN_POS = gql`
mutation LoginPOS($posId: Int!) {
  loginPOS(posID: $posId) {
    employeePOS {
      _id
      firstName
      lastName
      email
      password
      posID
      roles {
        _id
        name
        hourlyRate
      }
      tables {
        _id
        tableNum
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
        orderStatus
        tip
        date
        tableStatus
      }
      shifts {
        _id
        date
        clockIn
        clockOut
        breakStart
        breakEnd
      }
    }
  }
}`