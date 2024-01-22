import { Routes } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
	{
		path: "login", component: LoginPageComponent
	},
	{
		path: "posts", component: PostsPageComponent
	}
];
