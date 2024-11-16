import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit {
  supportData: { answers: [{ question: string, answer: string }] | [] } = { answers: [] };

  constructor() {}

  ngOnInit() {
    fetch('FAQ.json')
      .then(res => res.json())
      .then(json => {
        this.supportData = json;
        console.log(this.supportData)
      });
  }
}
