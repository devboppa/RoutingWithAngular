import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  message = input.required();
  userId = input.required<string>();
  userName = input.required<string>();
  // private userService = inject(UsersService);

  // userName = computed(
  //   () => this.userService.users.find((u) => u.id === this.userId())?.name
  // );
}

export const resolveUser: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find((u) => {
      return u.id === activatedRoute.paramMap.get('userId');
    })?.name || '';
  return userName;
};
