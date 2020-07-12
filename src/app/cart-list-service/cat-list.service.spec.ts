import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController   } from '@angular/common/http/testing';
import { CatListService } from './cat-list.service';

describe('CatListService', async () => {
  let service: CatListService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatListService]
    });
    service = TestBed.get(CatListService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of objects', () => {
    //  service.getPetsAndOwners().subscribe((list: any) => {
    //   expect(list.length).toBe(6); 
    // });
    const req = httpMock.expectOne('http://agl-developer-test.azurewebsites.net/people.json');
    
    expect(req.request.method).toEqual("GET");
    
    //req.flush(names);

   // httpMock.verify();
  });

  // it('should return an array of objects', async(inject([CatListService], (service: CatListService) => {
  //   service.getPetsAndOwners().subscribe((list: any) => {
  //     expect(list[0].gender).toBeTruthy;
  //   });
  // })));


});
