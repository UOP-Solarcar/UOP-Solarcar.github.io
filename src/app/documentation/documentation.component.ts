import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {
  data: any;
  url: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.url = data.image.coverPicture.homePage
      console.log(this.url)
    });
  }
}
