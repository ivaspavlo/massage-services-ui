import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IPageChange } from './interfaces';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit {

  @Input() pagesQty = 6;
  @Input() limit = 20;

  @Output() pageChange: EventEmitter<IPageChange> = new EventEmitter();

  public currentPage = 0;
  public ranges: number[][] = [];
  public currentRangeIndex = 0;
  public currentRange: number[] = [];

  private pagesArr: number[] = [];
  private visibleButtonsQty = 7;
  private rangeLength = 5;

  constructor() { }

  ngOnInit(): void {
    this.pagesArr = this.getArrFromNumber(this.pagesQty);
    this.ranges = this.getRanges();
    this.currentRangeIndex = 0;
    this.currentRange = this.getCurrentRange();
  }

  public onPageClick(pageNum: number): void {
    this.currentPage = pageNum;
    this.pageChange.emit({ page: this.currentPage, offset: this.currentPage * this.limit });
  }

  public onLastPageClick(): void {
    this.currentRangeIndex = this.ranges.length - 1;
    this.currentPage = this.pagesQty - 1;
    this.currentRange = this.getCurrentRange();
    this.pageChange.emit({ page: this.currentPage, offset: this.currentPage * this.limit });
  }

  public onDotsClick(): void {
    this.currentRangeIndex = this.currentRangeIndex + 1;
    this.currentRange = this.getCurrentRange();
    this.currentPage = this.currentRange.includes(this.currentPage) ? this.currentPage : this.currentRange[0];
    this.pageChange.emit({ page: this.currentPage, offset: this.currentPage * this.limit });
  }

  public onPrevClick(): void {
    if (this.currentPage - 1 < 0) { return }

    this.currentPage = this.currentPage - 1;

    if (!this.currentRange.includes(this.currentPage)) {
      this.currentRangeIndex = this.ranges.findIndex(arr => arr.includes(this.currentPage));
      this.currentRange = this.ranges[this.currentRangeIndex];
    }
    this.pageChange.emit({ page: this.currentPage, offset: this.currentPage * this.limit });
  }

  public onNextClick(): void {
    if (this.currentPage === this.pagesArr.length - 1) { return }

    this.currentPage = this.currentPage + 1;

    if (!this.currentRange.includes(this.currentPage)) {
      this.currentRangeIndex = this.ranges.findIndex(arr => arr.includes(this.currentPage));
      this.currentRange = this.getCurrentRange();
    }
    this.pageChange.emit({ page: this.currentPage, offset: this.currentPage * this.limit });
  }

  private getCurrentRange() {
    const isLastRange = this.currentRangeIndex === this.ranges.length - 1;
    if (isLastRange) {
      return this.pagesArr.reduceRight((acc, curr) => {
        return acc.length < this.visibleButtonsQty ? [...acc, curr] : acc;
      }, [] as number[]).sort((a, b) => a - b) as number[];
    } else {
      return this.ranges[this.currentRangeIndex];
    }
  }

  private getArrFromNumber(num: number): number[] {
    return new Array(num).fill(null).map((_, index) => 0 + index);
  }

  private getRanges(): number[][] {
    const chunksArr = this.arrayToChunks(this.pagesArr, this.rangeLength);
    const last = chunksArr[chunksArr.length - 1];
    const lastButOne = chunksArr.length > 1 ? chunksArr[chunksArr.length - 2] : null;
    const allShowable = lastButOne && last.length + lastButOne.length <= this.visibleButtonsQty;

    // Merge last two ranges if the last range is small
    if (allShowable) {
      chunksArr.pop();
      chunksArr[chunksArr.length - 1] = [ ...lastButOne, ...last, ];
    }

    return chunksArr;
  }
  
  private arrayToChunks(arr: any[], len: number): any[] {
    const chunks = [];
    let i = 0;
    let n = arr.length;
  
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
  
    return chunks;
  }
  

}
