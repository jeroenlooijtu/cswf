import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './about/about-page/about-page.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [MealListComponent, MealDetailComponent, AboutPageComponent],
  providers: [MealService],
  exports: [MealListComponent, MealDetailComponent, AboutPageComponent]
})
export class FeaturesModule {}
