import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/admin/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { PostsComponent } from './components/posts/posts.component';
// import { CategoriesComponent } from './components/categories/categories.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationFooterComponent } from './components/admin/admin/navigation/navigation-footer/navigation-footer.component';
// import { NavigationLogoComponent } from './components/navigation-logo/navigation-logo.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin/admin.component';
import { NavigationMenuComponent } from "./components/admin/admin/navigation/navigation-menu/navigation-menu.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationLogoComponent } from "./components/admin/admin/navigation/navigation-logo/navigation-logo.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/auth/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        // DashboardComponent,
        LoginComponent,
        RegisterComponent,
        // PostsComponent,
        // CategoriesComponent,
        NavigationMenuComponent,
        NavigationFooterComponent,
        NavigationLogoComponent,
        AdminComponent,
        NotFoundComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatSlideToggleModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
