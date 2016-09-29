import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list.component';

const todoListRoutes: Routes = [
    {
        path: 'todoapp',
        component: TodoListComponent
    }
]

export const todoListRouting: ModuleWithProviders = RouterModule.forChild(todoListRoutes);