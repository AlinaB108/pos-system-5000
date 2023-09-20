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
      orderStatus
      tip
      date
      tableStatus
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
    shifts {
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
    orderStatus
    tip
    date
    tableStatus
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
      orderStatus
      tip
      date
      tableStatus
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
    shifts {
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
    orderStatus
    tip
    date
    tableStatus
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
}`;

export const ME = gql`query Query {
  me {
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
      orderStatus
      tip
      date
      tableStatus
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
    shifts {
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
}`
