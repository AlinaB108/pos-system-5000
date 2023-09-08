import { gql } from '@apollo/client';

export const QUERY_EMPLOYEE = gql`
query Employee($id: ID!) {
  employee(_id: $id) {
    _id
    firstName
    lastName
    email
    password
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
}`;

export const QUERY_MENU_ITEM = gql `
query MenuItem($id: ID!) {
  menuItem(_id: $id) {
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
}`;

export const QUERY_TABLE = gql`
query Table($id: ID!) {
  table(_id: $id) {
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
}`;

export const QUERY_ALL_EMPLOYEES = gql`
query Employees {
  employees {
    _id
    firstName
    lastName
    email
    password
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
}`;

export const QUERY_ALL_MENU = gql`
query MenuItems {
  menuItems {
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
}`;

export const QUERY_ALL_TABLES = gql`
query Table {
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
}`;


