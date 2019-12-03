import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Observable} from 'rxjs';
import { SearchComponent } from './search.component';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Submit',() =>{
  it('should return',()=>{
  const result=this.component.onSubmit();
  expect(result).toBe(Observable);
  })
})
