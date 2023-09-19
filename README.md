# task-manager
It is small fullstack app on typescript.

When user visit our site response redirect to login. 
After registration or login redirect to task manager. 
Use material UI, Yupl and Formik libs for components. 
User can create category for tasks. 
By click "more" button user redirected to category list of tasks. 
By click "actions" button user can delete category  or edit category name. 
By click "add category" button user can create category with name.  
By click "add task" button user redirect to create task page. 
By click "delete" button  user see popup where his can delete task or cancel this operation. 
By click "edit task" button user redirect to edit task page after edit user redirect to list task.  


## The project consists of a frontend and a backend part.

### The frontend 
was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). and material UI, Yupl and Formik libs for components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### The backend part  --
 [Nest](https://github.com/nestjs/nest) framework with jwt registration and authorization for users and PostgreSQL DB with Type ORM.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod