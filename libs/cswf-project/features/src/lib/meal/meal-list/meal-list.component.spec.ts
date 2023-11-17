import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealListComponent } from './meal-list.component';
import { MealService } from '../meal.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MealListComponent', () => {
  let component: MealListComponent;
  let fixture: ComponentFixture<MealListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealListComponent],
      providers:[MealService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(MealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
