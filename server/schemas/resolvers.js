const { AuthenticationError } = require('apollo-server-express');
const { Employee, Menu, Category, Role, Shift, Table } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // FIND ALL
    employees: async () => {
      return await Employee.find().populate({
        path: 'tables', 
        populate: {
          path: 'order', 
          model: 'Menu',
          populate: {
            path: 'category'
          }
        }}).populate({path: 'shifts'}).populate({path: 'roles'})
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
      const table = await Table.findOneAndUpdate({tableNum: args.tableNum}, args, {new: true }).populate({path: 'order', populate: {path: 'category'}});
      return table; 
    },
    addShift: async(_, args, context) => {
      if(context.employee){
        const shift = await Shift.create(args);
        
        await Employee.findByIdAndUpdate(
          context.employee._id, 
          { $push: {shifts: shift }}, 
          {new: true});
          
        return shift ; 
      }
      
      throw new AuthenticationError('Not logged in')
    },
    updateShift: async(_, args, context)=>{
      if(context.employee){
        const updateShift = Shift.findByIdAndUpdate(args._id, args, {new: true });  
      return updateShift
      }

      throw new AuthenticationError('Not logged in')
    }
  }
}

module.exports = resolvers;
