import { Component, OnInit } from '@angular/core';
import { CatListService } from './../cart-list-service/cat-list.service';


@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  maleOwnedCats: string[] = [];
  femaleOwnedCats: string[] = [];
  catSortOrder = 'asc';

  constructor(private catListService: CatListService) { }

  ngOnInit(): void {

    this.catListService.getPetsAndOwners().subscribe((list: any) => {

      this.maleOwnedCats = this.sortedList('Male', 'Cat', list);
      this.femaleOwnedCats = this.sortedList('Female', 'Cat', list);

    });

  }

  sortedList(gender, petType, list) {
    var retval = [];
    list
      .filter(item => { return item.gender === gender })
      .forEach(item => {
        item.pets && item.pets.filter(pet => {return pet.type === petType})
          .forEach(item => {
            retval.push(item.name);
          })
      });

    return this.catSortOrder === 'asc' ? retval.sort() : retval.sort().reverse();
  }

  handleChange(){ 
    this.catSortOrder === 'asc' ? this.maleOwnedCats.sort() : this.maleOwnedCats.sort().reverse();
    this.catSortOrder === 'asc' ? this.femaleOwnedCats.sort() : this.femaleOwnedCats.sort().reverse();
  } 


}
