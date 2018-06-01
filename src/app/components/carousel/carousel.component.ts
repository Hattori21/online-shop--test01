import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { GalleryImage } from '../../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit, OnChanges {
  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }
}
