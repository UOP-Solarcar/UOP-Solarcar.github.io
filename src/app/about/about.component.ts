import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  data: any;
  aboutImage: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.aboutImage = data.image.coverPicture.about
      console.log(this.aboutImage)
    });
  }
}
