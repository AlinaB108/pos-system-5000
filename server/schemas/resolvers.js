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
      return await Table.find().populate({
          path: 'order', 
          model: 'Menu',
          populate: {
            path: 'category'
          }
        });
    },

    // FIND ONE
    employee: async (_, { _id }) => {
      try {
        return await Employee.findById(_id).populate({
          path: 'tables', 
          populate: {
            path: 'order', 
            model: 'Menu',
            populate: {
              path: 'category'
            }
          }}).populate({path: 'shifts'}).populate({path: 'roles'});
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
        return await Table.findById(_id).populate({
          path: 'order', 
          model: 'Menu',
          populate: {
            path: 'category'
          }
        });
      } catch (error) {
        throw new Error('Unable to fetch table');
      }
    },
    me: async(_,__, context)=>{
      try{
        if(context.employee){
          const employee = await Employee.findById(context.employee._id).populate({
            path: 'tables', 
            populate: {
              path: 'order', 
              model: 'Menu',
              populate: {
                path: 'category'
              }
            }}).populate({path: 'shifts'}).populate({path: 'roles'});
            return employee
        }
      }catch(err){
        throw new Error('Not logged in!');
      }
    }
  },
  Mutation: {
    updateMenu: async(_, args, context) => {
        if(context.employee){
          const menu = await Menu.findOneAndUpdate({item: args.item}, args, {new: true}).populate({path: 'category'});
          return menu;
        }
        throw new AuthenticationError('Not logged in')
    },
    updateTable: async(_, args, context) => {
      if(context.employee){
      const table = await Table.findOneAndUpdate({tableNum: args.tableNum}, args, {new: true }).populate({path: 'order', populate: {path: 'category'}});

      await Employee.findByIdAndUpdate(
        context.employee._id,
        { $addToSet: {tables: table }},
        {new: true});

      return table;
      }
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
    },
    login: async (parent, { email, password }) => {
      const employee = await Employee.findOne({ email });

      if (!employee) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await employee.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(employee);

      return { token, employee };
    },
    loginPOS: async (parent, { posID }) => {
      const employeePOS = await Employee.findOne({ posID: posID }).populate({
        path: 'tables',
        populate: {
          path: 'order',
          model: 'Menu',
          populate: {
            path: 'category'
          }
        }}).populate({path: 'shifts'}).populate({path: 'roles'});
      if (!employeePOS) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(employeePOS);

      return { token, employeePOS };
    }
  }
}

module.exports = resolvers;
