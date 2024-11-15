import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit {

  url: string = '/FAQ.json';
  supportData:any = '{}';

  constructor() {}

  ngOnInit() {
    fetch(this.url)
      .then(res => res.json())
      .then(json => {
        this.supportData = json;
        console.log(this.supportData)
      });
  }
}
