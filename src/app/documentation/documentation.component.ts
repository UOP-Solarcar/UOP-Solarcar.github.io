import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {
  data: any;
  docImage: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.docImage = data.image.coverPicture.documentation
      console.log(this.docImage)
    });
  }
}
