'use strict';

enum ApiRoutes {
  REGISTER = '/auth/register',
  LOGIN = 'auth/login',
  GET_APP_DATA = 'home/get/data/',
  GET_TODO_COUNT = 'todo/get/count/user/',
  GET_PROJECT_COUNT = 'project/get/count/',
  GET_TODO_COUNT_BY_LIST_ID = 'todo/get/count/list/',
  GET_DUE_TODAY_COUNT = 'todo//get/count/date/list/',
  GET_DUE_TODAY_COUNT_BY_LIST_ID = 'todo/get/count/date/user/',
}

export default ApiRoutes;
