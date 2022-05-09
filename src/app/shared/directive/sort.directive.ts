import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sortedList]'
})
export class SortDirective {
  @Input() sortedList: Array<any> = [];
  private primaryList: Array<any> = [];
  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }
  
  @HostListener("click")
  sortData() {

    const elem = this.targetElement.nativeElement;
    const order = elem.getAttribute("data-order");
    const property = elem.getAttribute("data-name");

    if (order === "notsorted") {
      this.primaryList = [...this.sortedList];
      this.sortedList.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
      elem.setAttribute("data-order", "asc");
      elem.children[0].classList.add('fa', 'fa-arrow-down');
    } else if (order === "asc") {
      this.sortedList.sort((a, b) => (a[property] < b[property]) ? 1 : -1);
      elem.setAttribute("data-order", "desc");
      elem.children[0].classList.remove('fa', 'fa-arrow-down');
      elem.children[0].classList.add('fa', 'fa-arrow-up');
    } else {
      this.sortedList.splice(0, this.sortedList.length);
      this.sortedList.push(...this.primaryList);
      elem.setAttribute("data-order", "notsorted");
      elem.children[0].classList.remove('fa', 'fa-arrow-up');
    }

  }

}
