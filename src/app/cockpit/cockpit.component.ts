import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();
@ViewChild('serverContent') serverContent : ElementRef ;

  constructor() {
  }

  ngOnInit(): void {

  }
 onAddServer(serverName:HTMLInputElement){
      this.serverCreated.emit({
      name: serverName.value,
      content: this.serverContent.nativeElement.value
    });}

    onAddBlueprint(serverName:HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverName.value,
      content: this.serverContent.nativeElement.value
    });
  }

}

