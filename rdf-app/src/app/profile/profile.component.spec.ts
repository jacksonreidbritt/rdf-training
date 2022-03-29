import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {AppComponent} from "../app.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {ProfileService} from "./services/profile.service";
import {of} from "rxjs";


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let profileService: ProfileService;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    profileService = new ProfileService(httpClientSpy);
  });



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match the json created', () => {
    expect(component.profileName).toBe("jackson")
  });

  it('should render name under p tag', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#profileName')?.textContent)
      .toContain('jackson');
  });

  it('should render patrick name under p tag', async () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    fixture.componentInstance.ngOnInit().then(() => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('#profileName')?.textContent)
        .toContain('patrick');
    });
  });
});
