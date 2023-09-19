# task-manager
It is small fullstack app on typescript.

When user visit our site response redirect to login. ![login page](https://prnt.sc/nlL2HE-XJ054)
After registration or login redirect to task manager. ![category page](https://prnt.sc/Hvxd-INpnsx7)
User can create category for tasks by click "add category" button. ![add category](https://prnt.sc/DhXOCe659Ofx)
By click "more" button user redirected to category list of tasks. ![list of tasks](https://prnt.sc/NgHqwWOoLGWx)
By click "actions" button user can delete category  or edit category name. ![actions](https://prnt.sc/01UoD9jpFtXI)
 
By click "add task" button user redirect to create task page. ![create task page](https://prnt.sc/jy-InHyLzXxT)
By click "delete" button  user see popup where his can delete task or cancel this operation. ![delete task](https://prnt.sc/zu6ZMVGCKhJo)
By click "edit task" button user redirect to edit task page after edit user redirect to list task.  


## The project consists of a frontend and a backend part.

### The frontend 
was created with [Create React App](https://github.com/facebook/create-react-app). and material UI, Yupl and Formik libs for components.

## Available Scripts

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Install the project's base dependencies with the `npm install` command.
3. Start development mode by running the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in your browser.
 This page will automatically reload after saving changes to the project files.


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