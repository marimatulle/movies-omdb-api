import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  info!: any;

  constructor(private actRoute: ActivatedRoute,
     private moviesService: MoviesService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.moviesService.searchDetails(id).subscribe(result => {
      this.info = result;
      console.log(this.info)
    });
    console.log(this.info)
  }

  openSite() {
    window.open(this.info.Website, '_blank');
  }

}
