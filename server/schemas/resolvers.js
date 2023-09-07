const { AuthenticationError } = require('apollo-server-express');
const { Employee, Menu, Category, Role, Shift, Table } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // FIND ALL
    employees: async () => {
      return await Employee.find().populate('tables');
    },
    menuItems: async () => {
      return await Menu.find().populate('category');
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
    table: async (_, { _id }) => {
      try {
        return await Table.findById(_id);
      } catch (error) {
        throw new Error('Unable to fetch table');
      }
    },
  },
  Mutation: {
    updateTable: async(_, args) => {
      const table = await Table.findByIdAndUpdate(args._id, args, {new: true });
    },
    addShift: async(_, args, context) => {
      if(context.employee){
        const shift = new Shift(args);

        await Employee.findByIdAndUpdate(context.employee._id, { $push: {shifts: shift }});

        return shift; 
      }
      throw new AuthenticationError('Not logged in')
    },
    updateShift: async(_, args, context)=>{
      if(context.employee){
        const updateShift = Shift.findByIdAndUpdate(args._id, args, {new: true });
      }
    }
  }
}

module.exports = resolvers;
