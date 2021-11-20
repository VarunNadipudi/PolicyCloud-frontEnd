import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGitHubComponent } from './signup-git-hub.component';

describe('SignupGitHubComponent', () => {
  let component: SignupGitHubComponent;
  let fixture: ComponentFixture<SignupGitHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupGitHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
