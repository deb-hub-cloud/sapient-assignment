import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'floating-banner',
    pathMatch: 'full',
  },
  { path: 'floating-banner', 
     loadChildren: () => import('./floating-banner/floating-banner.module').then(m =>     
     m.FloatingBannerModule) 
   },
   { path: 'shopping-list', 
     loadChildren: () => import('./shopping-list/shopping-list.module').then(m =>     
     m.ShoppingListModule) 
   },
   { path: 'counter-input-output', 
     loadChildren: () => import('./counter-input-output/counter-input-output.module').then(m =>     
     m.CounterInputOutputModule) 
   },
   { path: 'counter-subject', 
     loadChildren: () => import('./counter-subject/counter-subject.module').then(m =>     
     m.CounterSubjectModule) 
   },
   { path: 'student-list', 
     loadChildren: () => import('./student-table/student-table.module').then(m =>     
     m.StudentTableModule) 
   },
   { path: 'infinity-scroll', 
     loadChildren: () => import('./dynamic-div-creation/dynamic-div-creation.module').then(m =>     
     m.DynamicDivCreationModule) 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
