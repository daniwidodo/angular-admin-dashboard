import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { DashboardComponent } from './components/admin/admin/dashboard/dashboard.component';
import { PostsComponent } from './components/admin/admin/posts/posts.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostsComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //   { path: 'posts', component: PostsComponent, data: { mode: 'list' } },
  //   { path: 'posts/add', component: PostsComponent, data: { mode: 'add' } },
  //   { path: 'posts/edit', component: PostsComponent, data: { mode: 'edit' } },
  //   { path: 'posts/view', component: PostsComponent, data: { mode: 'view' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
