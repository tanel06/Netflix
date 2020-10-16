import { Component, OnInit, OnDestroy } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.css']
})
export class DetailSerieComponent implements OnInit, OnDestroy {
  
  serie : any[];
  id;
  serieSub : Subscription;

  constructor(private serieService : SerieService, private route : ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params);

  }

  ngOnInit() {
    this.serieSub = this.serieService.getSerieById(this.id.id).subscribe
      (data=>{
        this.serie = data;
      })
  }

  ngOnDestroy(){
    if(this.serieSub)
      this.serieSub.unsubscribe();
  }

}
