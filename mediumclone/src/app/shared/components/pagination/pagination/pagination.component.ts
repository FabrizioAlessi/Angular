import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() total!: number
  @Input('limit') limit!: number
  @Input('currentPage') currentPage!: number
  @Input('url') url!: string

  pagesCount!: number
  pages!: Array<number>

  constructor(private utility:UtilityService){}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit)//arrotondo per il num intero più grande con ceil (questo sarà il numero di pagine)
    this.pages = this.utility.rangeFunction(1, this.pagesCount)

  }
  // intializePage(){
  //   if(this.total){
  //     this.pagesCount = Math.ceil(this.total / this.limit)//arrotondo per il num intero più grande con ceil (questo sarà il numero di pagine)
  //     this.pages = this.utility.rangeFunction(1, this.pagesCount)
  //   }
  // }
}
