import { Component, OnInit } from '@angular/core';

const x = '<p>test works!</p>';
@Component({
  selector: 'app-test',
  template: x
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
