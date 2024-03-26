import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibNameComponent } from './libName.component';

describe('LibNameComponent', () => {
  let component: LibNameComponent;
  let fixture: ComponentFixture<LibNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
