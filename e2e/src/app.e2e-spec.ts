import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display - List of 4 male owned cats', () => {
    page.navigateTo();
    expect(page.getMaleCatOwnerElements().count()).toEqual(4);
  });

  it('should display a list of 3 female owned cats', () => {
    page.navigateTo();
    expect(page.getFemaleCatOwnerElements().count()).toEqual(3);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

describe('Application - Ascending order test', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });
  
  it('should display showing the male owned cats in ascending order ', () => {
    expect(page.getMaleCatOwnerText('0')).toEqual('Garfield');
    expect(page.getMaleCatOwnerText('1')).toEqual('Jim');
    expect(page.getMaleCatOwnerText('2')).toEqual('Max');
    expect(page.getMaleCatOwnerText('3')).toEqual('Tom');
  });
  
});


describe('Application - Descending order test', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.getDescRadioButtonElement().click();
  });
  
  it('should display showing the male owned cats in descending order ', () => {
    expect(page.getMaleCatOwnerText('0')).toEqual('Tom');
    expect(page.getMaleCatOwnerText('1')).toEqual('Max');
    expect(page.getMaleCatOwnerText('2')).toEqual('Jim');
    expect(page.getMaleCatOwnerText('3')).toEqual('Garfield');
    expect(page.getMaleCatOwnerText('0')).not.toEqual('Garfield');
    
  });
  
});