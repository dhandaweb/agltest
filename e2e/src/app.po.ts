import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getDescRadioButtonElement() {
    return element.all(by.id('desc'));
  }

  getMaleCatOwnerElements() {
    return element.all(by.css('.maleCatOwner'));
  }

  getFemaleCatOwnerElements() {
    return element.all(by.css('.femaleCatOwner'));
  }

 getMaleCatOwnerText(index: string) {
   return element(by.css('#maleCatOwner' + index)).getText();
   
 }

 getFemaleCatOwnerCatText(index: string) {
   return element(by.css('#femaleCatOwner' + index)).getText();
   
 }

 

}
