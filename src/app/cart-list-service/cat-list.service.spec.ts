import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController   } from '@angular/common/http/testing';
import { CatListService } from './cat-list.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const testUrl = 'http://agl-developer-test.azurewebsites.net/people.json';
const dummyData = [{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null},{"name":"Fred","gender":"Male","age":40,"pets":[{"name":"Tom","type":"Cat"},{"name":"Max","type":"Cat"},{"name":"Sam","type":"Dog"},{"name":"Jim","type":"Cat"}]},{"name":"Samantha","gender":"Female","age":40,"pets":[{"name":"Tabby","type":"Cat"}]},{"name":"Alice","gender":"Female","age":64,"pets":[{"name":"Simba","type":"Cat"},{"name":"Nemo","type":"Fish"}]}]

describe('CatListService', async () => {
  let service: CatListService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatListService]
    });
    service = TestBed.get(CatListService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
    
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cats and owners (called once)', (() => {
    
    httpClient.get(testUrl)
      .subscribe(data =>
        expect(data).toEqual(dummyData,'should return expected cats and owners')
      );

    const req = httpMock.expectOne(testUrl);

    expect(req.request.method).toEqual('GET');

    req.flush(dummyData);

   
  }));

  it('should be OK returning no data for cats and owners', () => {

    httpClient.get(testUrl)
    .subscribe((data:any) =>
      expect(data.length).toEqual(0)
    );

    const req = httpMock.expectOne(testUrl);
    req.flush([]); 
  });

  it('should return an array of pets in the pets property with a name property', () => {

    httpClient.get(testUrl)
    .subscribe((data:any) =>{
      expect(data[0].pets[0].name).toBeTruthy();
    });

    const req = httpMock.expectOne(testUrl);
    req.flush([{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"}]}]); 

  });


  it('should return an array of pets in the pets property with a type property which equals the string "Cat"', () => {

    httpClient.get(testUrl)
    .subscribe((data:any) =>{
      expect(data[0].pets[0].type).toBe('Cat');
    });

    const req = httpMock.expectOne(testUrl);
    req.flush([{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"}]}]); 
  });

});
