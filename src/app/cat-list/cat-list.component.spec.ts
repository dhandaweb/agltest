import { ComponentFixture, TestBed,async, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CatListComponent } from './cat-list.component';
import { CatListService } from './../cart-list-service/cat-list.service';
import { HttpClientTestingModule  } from '@angular/common/http/testing';

describe('CatListComponent', () => {
  let component: CatListComponent;
  let fixture: ComponentFixture<CatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ,HttpClientTestingModule],
      declarations: [ CatListComponent ],
      providers: [ CatListService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct number cats owned by Males', async(inject([CatListService], (service: CatListService) => {
    const fixture = TestBed.createComponent(CatListComponent);
    const comp = fixture.debugElement.componentInstance;
    let maleOwnedCats: string  [] = [];
    // the service can be used as a source of the data as the data is mocked behind the scenes
    service.getPetsAndOwners().subscribe((data) => {
          maleOwnedCats = comp.sortedList('Male', 'Cat', data);
     
          expect(maleOwnedCats.length).toEqual(4);
          expect(maleOwnedCats[0]).toEqual('Garfield');
          expect(maleOwnedCats[1]).toEqual('Tom');
          expect(maleOwnedCats[2]).toEqual('Max');
          expect(maleOwnedCats[3]).toEqual('Jim');
          expect(maleOwnedCats[2]).not.toEqual('Maximus');
    });
  })));


});
