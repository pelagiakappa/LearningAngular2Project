// -->143 Setting Up Routes<--
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
  // By default, Angular matches paths by prefix. That means, that the
  // following route will match both /recipes  and just /
  // { path: '', redirectTo: '/somewhere-else' }
  // Actually, Angular will give you an error here, because that's a
  // common gotcha: This route will now ALWAYS redirect you! Why?
  // Since the default matching strategy is "prefix", Angular checks
  // if the path you entered in the URL does start with the path
  // specified in the route. Of course every path starts with ''
  // (Important: That's no whitespace, it's simply "nothing").
  // To fix this behavior, you need to change the matching strategy to
  // "full":
  // { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
  // Now, you only get redirected, if the full path is '' (so only if
  // you got NO other content in your path in this example).
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent,
    // -->148 Adding Child Routing Together<--
    children: [
      {path: '', component: RecipeStartComponent},
      //  -->152 Adding Editing Routes<--
      {
        path: 'new', component: RecipeEditComponent,
        // -->257 Route Protection and Redirection Example<--
        canActivate: [AuthGuard]
      },
      // -->148 Adding Child Routing Together<--
      {path: ':id', component: RecipeDetailComponent},
      //  -->152 Adding Editing Routes<--
      {
        path: ':id/edit', component: RecipeEditComponent,
        // -->257 Route Protection and Redirection Example<--
        canActivate: [AuthGuard]
      }
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  // -->249 Creating a Signup Page and Route<--
  {path: 'signup', component: SignupComponent},
  // -->252 Signin Users In<--
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
