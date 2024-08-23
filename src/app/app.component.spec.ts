import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ServiceServices } from './services/services.service';
import { of } from 'rxjs';
import { Information } from '../Info';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let serviceSpy: jasmine.SpyObj<ServiceServices>;

  const mockData: Information[] = [{} as Information, {} as Information];

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ServiceServices', ['getData']);

    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: ServiceServices, useValue: spy },
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    serviceSpy = TestBed.inject(ServiceServices) as jasmine.SpyObj<ServiceServices>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data and set informations array', () => {
    serviceSpy.getData.and.returnValue(of(mockData));
    component.fetchData();
    expect(serviceSpy.getData).toHaveBeenCalled();
    expect(component.informations).toEqual(mockData);
  });

  it('should refresh data when onRefresh is called', () => {
    serviceSpy.getData.and.returnValue(of(mockData));
    component.onRefresh();
    expect(serviceSpy.getData).toHaveBeenCalled();
    expect(component.informations).toEqual(mockData);
  });
});
