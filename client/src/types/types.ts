export interface IRegisterLoginUserData {
  email: string;
  password: string;
}

export interface IResponseUserData {
  user: {};
  access_token: string;
}

export interface IErrorData {
  message: [] | string;
  error: string;
  statusCode: number;
}

export interface IAddCategoryData {
  name: string;
}

export interface IEditCategoryData {
  name: string;
  id: number;
}

export interface IResponseAddCategoryData {
  name: string;
  user: {
    id: number;
  };
  id: number;
  dateCreated: string;
}

export interface IResponseEditCategoryData {
  id: number;
  name: string;
  dateCreated: string;
}

export interface IResponseOneCategoryData {
    id: number;
    name: string;
    dateCreated: string;
    tasks: [];
}
export interface IResponseOneTaskData {
    id: number;
    name: string;
    dateStart: string;
    dateEnd: string;
}

export interface IResponseCategoryByIdData {
  id: number;
  name: string;
  dateCreated: string;
//   user: {};
  tasks: [];
}

export interface IResponseDeleteCategoryData {
  message: string;
}

export interface IAddTaskData {
  name: string;
  dateStart: string;
  dateEnd: string;
  category_id: number;
  description: string;
}

export interface IResponseTaskByIdData {
  
}
export interface IEditTaskData {
    id: number;
    task: {}
}
export interface IResponseEditTaskData {
  
}
export interface IResponseDeleteTaskData {
  
}
