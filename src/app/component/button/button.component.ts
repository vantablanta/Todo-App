import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'green'
  @Input() text: string = "Add"

    onClick() :void{
      alert("clicked")
    }
  constructor() { }

  ngOnInit(): void {
  }

}
