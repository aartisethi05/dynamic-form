import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  modalPopupObject: any;
  display: boolean = false;
  controls = [
    { name: 'label', type: 'label', inputType: 'label',text:'label'},
    { name: 'text', type: 'input-text', inputType: 'text', placeholder: '' ,value:''},
    { name: 'date', type: 'input-date', inputType: 'date', placeholder: '' ,value:''},
    { name: 'checkbox', type: 'input-check', inputType: 'checkbox',  displayText: 'Check box',text:''},
    { name: 'dropdown', type: 'input-dropdown', inputType: 'dropdown',  options: []  }
  ];

  
  droppedItems = [];
  //passedItems=[];
  dragEnabled = true;
  htmlText: any;
  test: string = '';
  currentDraggedItem: any;
i=0;
  constructor() {
    this.modalPopupObject = {};
  }
  
  onAnyDrop(e: any) {
    this.currentDraggedItem = e;
    this.currentDraggedItem.dragData.idd= 'control_' + this.i;
    this.i=this.i+1;
   // console.log( this.currentDraggedItem );
    if(e.dragData.type !== 'label'){   
       this.display = true;
      }
    else {
      this.updateDroppedItem(this.currentDraggedItem);
    }
    
    // this.droppedItems.push(e.dragData);
    // this.updateHtmlCode();
    // this.test += this.renderHtmlCode(e.dragData);
  }

  updateHtmlCode(): void {
    this.htmlText = this.droppedItems;
  }

  // removeItem(item: any, list: Array<any>) {
  //   let index = list.map(function (e) {
  //     return e.name
  //   }).indexOf(item.name);
  //   list.splice(index, 1);
  // }

  renderHtmlCode(htmlObject: any): string {
    if (htmlObject.inputType === 'label') {
      return '<label> </label>';
    } else {
      return '<input type="' + htmlObject.inputType
        + '" placeholder="' + htmlObject.placeholder + '" value="' + htmlObject.value + '" title="' + htmlObject.title + '"/>';
    }
  }

  onSubmit(f: any): void {
    this.display = false;
    this.updateDroppedItem(f.value);
  }

  updateDroppedItem(e: any): void {
    //debugger;
  //  console.log(typeof this.currentDraggedItem);
  //   let p=this.currentDraggedItem.filter(function(item){
  //      console.log('hy'+item);
  //       return item.idd==e.id;
  //   });
   
    this.currentDraggedItem.dragData.placeholder = e.placeholder;
    this.currentDraggedItem.dragData.value = e.value;
    this.currentDraggedItem.dragData.title = e.title;
    //console.log(this.currentDraggedItem.dragData);
    this.droppedItems.push({...this.currentDraggedItem.dragData});
    //this.passedItems.push({...this.currentDraggedItem.dragData});
    //console.log(this.passedItems);
    this.updateHtmlCode();
    this.test += this.renderHtmlCode(this.currentDraggedItem.dragData);
  }
  
}
