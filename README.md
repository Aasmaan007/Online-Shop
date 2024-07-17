
# Online Shop Application

 This is an Online Shop web application using Express.js and MongoDB, incorporating key functionalities such as user authentication, product management, shopping cart functionality, and order processing. Implemented payment processing with Stripe API, ensured responsive web design with HTML, CSS, and JavaScript, and utilized AJAX for dynamic content updates. Enhanced security with session management, CSRF protection, and role-based access control for admin routes.




## Features

- User Authentication (Sign up, login, and logout functionality)
- Product Management (Add, edit,delete products , view product details and inventory management)
- Order Processing (Place orders,order status updates and management)
- Payment Integration (Secure payment processing using Stripe API)
- Admin Dashboard (Admin-specific functionalities for managing products and orders)
- Security Features (Session management and CSRF protection)
- Responsive Design (Optimized for mobile and desktop views using HTML, CSS, and JavaScript)
- Dynamic content updates with AJAX



## Installation

1. Clone the repository.

```bash
  git clone https://github.com/Aasmaan007/Online-Shop.git
  cd Online-Shop
```

2. Install all dependencies.


```bash
  npm install
```

## Running the Application

1. Start a MongoDb server on your system.

2. Start  Node.js server.
```bash
  npm start
```
3. To give Admin access , select ObjectId for corresponding user from MongoDb users collection and set isAdmin to true using following command.
```bash
  db.users.updateOne({_id: ObjectId("enter the ObjectId")} , { $set: {isAdmin: true}})
```
