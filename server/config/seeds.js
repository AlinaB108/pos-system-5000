const db = require('./connection');
const { Menu, Role, Shift, Table, Employee, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Beverages' },
    { name: 'Appetizers' },
    { name: 'Main Courses' },
    { name: 'Desserts' },
  ]);

  console.log('Categories Seeded');

  await Role.deleteMany();

  const roles = await Role.insertMany([
    { name: 'Manager', hourlyRate: 80 },
    { name: 'Waiter', hourlyRate: 10 },
    { name: 'Chef', hourlyRate: 15 },
    { name: 'Bartender', hourlyRate: 12 },
  ]);

  console.log('Roles Seeded');

  await Shift.deleteMany();

  const shifts = await Shift.insertMany([
    { clockIn: Date(), clockedIn: false, clockOut: Date(), breakStart: null, breakEnd: null },
    { clockIn: Date(), clockedIn: false, clockOut: Date(), breakStart: null, breakEnd: null },
    { clockIn: Date(), currentShift: true, clockedIn: false, clockOut: Date(), breakStart: null, breakEnd: null },
    { clockIn: Date(), currentShift: true, clockedIn: false, clockOut: Date(), breakStart: null, breakEnd: null },
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
      category: categories[1],
    },
    {
      item: 'Spaghetti Carbonara',
      price: 24.99,
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan cheese'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },
    {
      item: 'Coke',
      price: 3.99,
      ingredients: ['Coke'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Wine',
      price: 104.99,
      ingredients: ['Grapes'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Tea',
      price: 3.99,
      ingredients: ['Tea'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Chicken Alfredo',
      price: 305.99,
      ingredients: ['Noodles', 'Eggs', 'Chicken', 'Alfredo', 'Parmesan cheese'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },
    {
      item: 'Cannoli',
      price: 45.99,
      ingredients: ['Gold Flakes', 'Eggs', 'Dough', 'Cream', 'Chocolate Chips'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },
    {
      item: 'Arancini',
      price: 9.99,
      ingredients: ['Risotto', 'Mozzarella', 'Marinara Sauce'],
      inStock: true,
      quantity: 50,
      category: categories[1],
    },
    {
      item: 'Zucchini Fritti',
      price: 8.99,
      ingredients: ['Zucchini', 'Garlic Aioli'],
      inStock: true,
      quantity: 50,
      category: categories[1],
    },
    {
      item: 'Mussels Marinara',
      price: 11.99,
      ingredients: ['Mussels', 'Tomato Marinara Sauce'],
      inStock: true,
      quantity: 50,
      category: categories[1],
    },
    {
      item: 'Stuffed Mushrooms',
      price: 10.99,
      ingredients: ['Mushroom Caps', 'Herbs', 'Breadcrumbs', 'Cheese'],
      inStock: true,
      quantity: 50,
      category: categories[1],
    },

    // Main Courses
    {
      item: 'Ravioli di Casa',
      price: 20.99,
      ingredients: ['Ravioli', 'Ricotta', 'Spinach', 'Tomato Cream Sauce'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },
    {
      item: 'Osso Buco',
      price: 29.99,
      ingredients: ['Veal Shank', 'Gremolata', 'Saffron Risotto'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },
    {
      item: 'Gnocchi al Pesto',
      price: 18.99,
      ingredients: ['Potato Gnocchi', 'Basil Pesto', 'Roasted Cherry Tomatoes'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },
    {
      item: 'Chicken Marsala',
      price: 23.99,
      ingredients: ['Chicken Breasts', 'Marsala Wine Mushroom Sauce', 'Mashed Potatoes'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },

    // Desserts
    {
      item: 'Cannoli Tiramisu',
      price: 13.99,
      ingredients: ['Mascarpone', 'Chocolate Chips', 'Cannoli Shells'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },
    {
      item: 'Amaretto Cheesecake',
      price: 12.99,
      ingredients: ['Cheesecake', 'Amaretto Liqueur', 'Almond'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },
    {
      item: 'Strawberry Panna Cotta',
      price: 10.99,
      ingredients: ['Vanilla Panna Cotta', 'Strawberries', 'Berry Reduction'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },
    {
      item: 'Lava Nutella Cake',
      price: 14.99,
      ingredients: ['Nutella-filled Chocolate Cake', 'Vanilla Gelato'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },

    // Beverages
    {
      item: 'Aperol Spritz',
      price: 9.99,
      ingredients: ['Aperol', 'Prosecco', 'Soda'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Limoncello Martini',
      price: 11.99,
      ingredients: ['Limoncello', 'Vodka', 'Lemon Twist'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Espresso Con Panna',
      price: 4.99,
      ingredients: ['Espresso', 'Whipped Cream'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Italian Hot Chocolate',
      price: 6.99,
      ingredients: ['Hot Chocolate', 'Whipped Cream', 'Chocolate Shavings'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Bruschetta',
      price: 8.99,
      ingredients: ['Tomatoes', 'Garlic', 'Basil', 'Olive Oil', 'Italian Bread'],
      inStock: true,
      quantity: 50,
      category: categories[1],
    },
    {
      item: 'Calamari Fritti',
      price: 10.99,
      ingredients: ['Calamari', 'Marinara Sauce'],
      inStock: true,
      quantity: 50,
      category: categories[1],
    },
    {
      item: 'Caprese Salad',
      price: 9.99,
      ingredients: ['Tomatoes', 'Mozzarella', 'Basil', 'Balsamic Glaze'],
      inStock: true,
      quantity: 50,
      category: categories[1],
    },
    {
      item: 'Antipasto Platter',
      price: 12.99,
      ingredients: ['Cured Meats', 'Cheeses', 'Olives', 'Roasted Vegetables'],
      inStock: true,
      quantity: 50,
      category: categories[1],
    },

    // Main Courses
    {
      item: 'Lasagna',
      price: 19.99,
      ingredients: ['Pasta', 'Ricotta Cheese', 'Ground Beef', 'Marinara Sauce'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },
    {
      item: 'Chicken Piccata',
      price: 22.99,
      ingredients: ['Chicken Breast', 'Lemon Caper Sauce', 'Pasta'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },
    {
      item: 'Eggplant Parmesan',
      price: 18.99,
      ingredients: ['Eggplant Slices', 'Marinara Sauce', 'Mozzarella'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },
    {
      item: 'Seafood Risotto',
      price: 26.99,
      ingredients: ['Arborio Rice', 'Shrimp', 'Mussels', 'Clams', 'Saffron'],
      inStock: true,
      quantity: 50,
      category: categories[2],
    },

    // Desserts
    {
      item: 'Tiramisu',
      price: 12.99,
      ingredients: ['Ladyfingers', 'Mascarpone Cheese', 'Coffee', 'Cocoa Powder'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },
    {
      item: 'Panna Cotta',
      price: 9.99,
      ingredients: ['Vanilla Custard', 'Berry Compote'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },
    {
      item: 'Limoncello Sorbet',
      price: 7.99,
      ingredients: ['Lemon Sorbet'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },
    {
      item: 'Chocolate Fondant',
      price: 14.99,
      ingredients: ['Chocolate Lava Cake', 'Vanilla Gelato'],
      inStock: true,
      quantity: 50,
      category: categories[3],
    },

    // Beverages
    {
      item: 'Italian Soda',
      price: 4.99,
      ingredients: ['Flavored Syrup', 'Soda Water'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Espresso',
      price: 3.99,
      ingredients: ['Italian Espresso'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Limoncello',
      price: 8.99,
      ingredients: ['Limoncello Liqueur'],
      inStock: true,
      quantity: 50,
      category: categories[0],
    },
    {
      item: 'Sparkling Water',
      price: 3.99,
      ingredients: ['Sparkling Water', 'Lemon Twist'],
      inStock: true,
      quantity: 50,
      category: categories[0],
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
    { tableNum: 7, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 8, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 9, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 10, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 11, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 12, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 13, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 14, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 15, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 16, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 17, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 18, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 19, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 20, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 21, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 22, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 23, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 24, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 25, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 26, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 27, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 28, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 29, order: [], orderStatus: false, tip: 0, tableStatus: false },
    { tableNum: 30, order: [], orderStatus: false, tip: 0, tableStatus: false },
    // Add more tables as needed
  ]);

  console.log('Tables Seeded');

  await Employee.deleteMany();

  const employees = await Employee.insertMany([
    {
      firstName: 'John',
      lastName: 'K',
      email: 'john@example.com',
      password: 'password123',
      posID: 1000,
      roles: [roles[0]],
      tables: [],
      shifts: [shifts[0], shifts[2]],
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      password: 'password456',
      posID: 1001,
      roles: [roles[2], roles[0]],
      tables: [tables[3]._id, tables[4]._id, tables[5]._id],
      shifts: [shifts[0], shifts[3]]
    },
    {
      firstName: 'Chris',
      lastName: 'Banta',
      email: 'chris@example.com',
      password: 'password789',
      posID: 1002,
      roles: [roles[2], roles[0]],
      tables: [],
      shifts: []
    },
  ]);

  console.log('Employees Seeded');

  process.exit();
});