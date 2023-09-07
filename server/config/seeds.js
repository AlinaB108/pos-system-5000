const db = require('./connection');
const { Menu, Role, Shift, Table, Employee, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Appetizers' },
        { name: 'Main Courses' },
        { name: 'Desserts' },
        { name: 'Beverages' },
    ]);
    
    console.log('Categories Seeded');

    await Role.deleteMany();

    const roles = await Role.insertMany([
        { name: 'Waiter', hourlyRate: 10 },
        { name: 'Chef', hourlyRate: 15 },
        { name: 'Bartender', hourlyRate: 12 },
    ]);
    
    console.log('Roles Seeded');

    await Shift.deleteMany();

    const shifts = await Shift.insertMany([
        { clockIn: new Date(), clockOut: new Date(), breakStart: null, breakEnd: null },
        { clockIn: new Date(), clockOut: new Date(), breakStart: null, breakEnd: null },
        // Add more shifts as needed
    ]);
    
    console.log('Shifts Seeded');
    
    await Menu.deleteMany();
    
    const menuItems = await Menu.insertMany([
        {
            item: 'Mozzarella Sticks',
            price: 7.99,
            ingredients: ['Mozzarella cheese', 'Breadcrumbs', 'Marinara sauce'],
            inStock: true,
            quantity: 100,
            category: categories[0],
        },
        {
            item: 'Spaghetti Carbonara',
            price: 24.99,
            ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan cheese'],
            inStock: true,
            quantity: 50,
            category: categories[1],
        },
        {
            item: 'Coke',
            price: 3.99,
            ingredients: ['Coke'],
            inStock: true,
            quantity: 50,
            category: categories[3],
        },
        {
            item: 'Wine',
            price: 104.99,
            ingredients: ['Grapes'],
            inStock: true,
            quantity: 50,
            category: categories[3],
        },
        {
            item: 'Tea',
            price: 3.99,
            ingredients: ['Tea'],
            inStock: true,
            quantity: 50,
            category: categories[3],
        },
        {
            item: 'Fettucini Alfredo with Chicken',
            price: 35.99,
            ingredients: ['Noodles', 'Eggs', 'Chicken', 'Alfredo', 'Parmesan cheese'],
            inStock: true,
            quantity: 50,
            category: categories[1],
        },
        {
            item: 'Cannoli',
            price: 45.99,
            ingredients: ['Gold Flakes', 'Eggs', 'Dough', 'Cream', 'Chocolate Chips'],
            inStock: true,
            quantity: 50,
            category: categories[2],
        },
    ]);

    console.log('Menu Seeded');

    await Table.deleteMany();

    const tables = await Table.insertMany([
        { tableNum: 1, order: [menuItems[2], menuItems[0], menuItems[1], menuItems[6]], orderStatus: false, tip: 18, tableStatus: true },
        { tableNum: 2, order: [menuItems[2], menuItems[1]], orderStatus: false, tip: 6, tableStatus: true },
        { tableNum: 3, order: [menuItems[4], menuItems[1], menuItems[6]], orderStatus: false, tip: 16, tableStatus: true },
        { tableNum: 4, order: [menuItems[3], menuItems[0], menuItems[1]], orderStatus: false, tip: 25, tableStatus: false },
        { tableNum: 5, order: [menuItems[3], menuItems[0], menuItems[5]], orderStatus: false, tip: 30, tableStatus: false },
        { tableNum: 6, order: [menuItems[2], menuItems[5]], orderStatus: false, tip: 8, tableStatus: true },
        // Add more tables as needed
    ]);

    console.log('Tables Seeded');

    await Employee.deleteMany();

    const employees = await Employee.insertMany([
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            password: 'password123',
            roles: [roles[1]],
            tables: [tables[0]._id, tables[1]._id, tables[2]._id],
            shifts: [shifts[1]],
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
            password: 'password456',
            roles: [roles[2], roles[0]],
            tables: [tables[3]._id, tables[4]._id, tables[5]._id],
            shifts: [shifts[0]],
            },
            // Add more employees as needed
        ]);

        console.log('Employees Seeded');

        process.exit();
});