import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list.component';

import { AuthGuardService } from '../services/auth/auth-guard.service';

const todoListRoutes: Routes = [
    {
        path: 'todoapp',
        canActivate: [AuthGuardService],
        component: TodoListComponent
    }
]

export const todoListRouting: ModuleWithProviders = RouterModule.forChild(todoListRoutes);