import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveUser,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { userRoutes } from './users/users.routes';
export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUser,
    },
  },
  {
    path: '**',
    component: NotFoundComponentComponent,
  },
];
