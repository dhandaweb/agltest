import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CatListComponent } from './cat-list.component';
import { HttpClientTestingModule  } from '@angular/common/http/testing';

const dummyData = [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null},{"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}]

describe('CatListComponent', () => {
  let component: CatListComponent;
  let fixture: ComponentFixture<CatListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientTestingModule],
      declarations: [ CatListComponent ]
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

  it('should return the correct number cats owned by Males', () => {
    const fixture = TestBed.createComponent(CatListComponent);
    const comp = fixture.debugElement.componentInstance;
    let maleOwnedCats: string  [] = [];
  
    maleOwnedCats = comp.sortedList('Male', 'Cat', dummyData);

    expect(maleOwnedCats.length).toEqual(4);
    expect(maleOwnedCats[0]).toEqual('Garfield');
    expect(maleOwnedCats[1]).toEqual('Jim');
    expect(maleOwnedCats[2]).toEqual('Max');
    expect(maleOwnedCats[3]).toEqual('Tom');
    expect(maleOwnedCats[2]).not.toEqual('Maximus');
  
  });

  it('should return the correct number of female owned cats', () => {
    const fixture = TestBed.createComponent(CatListComponent);
    const comp = fixture.debugElement.componentInstance;
    let femaleOwnedCats: string  [] = [];
  
    femaleOwnedCats = comp.sortedList('Female', 'Cat', dummyData);

    expect(femaleOwnedCats.length).toEqual(3);
    expect(femaleOwnedCats[0]).toEqual('Garfield');
    expect(femaleOwnedCats[1]).toEqual('Simba');
    expect(femaleOwnedCats[2]).toEqual('Tabby');
  
  });


});
