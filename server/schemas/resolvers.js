const { AuthenticationError } = require('apollo-server-express');
const { Employee, Menu, Category, Roles, Shift, Table } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // FIND ALL
    employees: async () => {
      return await Employee.find();
    },
    menuItems: async () => {
      return await Menu.find();
    },    
    categories: async () => {
      return await Category.find();
    },    
    roles: async () => {
      return await Roles.find();
    },    
    shifts: async () => {
      return await Shift.find();
    },    
    tables: async () => {
      return await Table.find();
    },

    // FIND ONE
    employee: async (_, { _id }) => {
      try {
        return await Employee.findById(_id);
      } catch (error) {
        throw new Error('Unable to fetch employee');
      }
    },
    menuItem: async (_, { _id }) => {
      try {
        return await Menu.findById(_id);
      } catch (error) {
        throw new Error('Unable to fetch menu item');
      }
    },  
    category: async (_, { _id }) => {
      try {
        return await Category.findById(_id);
      } catch (error) {
        throw new Error('Unable to fetch category');
      }
    }, 
    role: async (_, { _id }) => {
      try {
        return await Roles.findById(_id);
      } catch (error) {
        throw new Error('Unable to fetch role');
      }
    },   
    shift: async (_, { _id }) => {
      try {
        return await Shift.findById(_id);
      } catch (error) {
        throw new Error('Unable to fetch shift');
      }
    },   
    table: async (_, { _id }) => {
      try {
        return await Table.findById(_id);
      } catch (error) {
        throw new Error('Unable to fetch table');
      }
    },
  }}
    // TODO: ALL CODE BELOW IS REFERENCING ACTIVITY 26 vv

module.exports = resolvers;
