import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Music } from "../model/music";
import { ItuneService } from '../service/itune-service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  music: any;
  
  

  constructor(private router:Router,private route: ActivatedRoute, public itunesmusicservice: ItuneService) { 
    
    this.route.params.subscribe((params => {

      if(params['musicId']){
        
        this.getMusic(params['musicId']);
       
      }
    }));
  }

  getMusic(musicId:String){

    this.itunesmusicservice.moreInfo(musicId).pipe(
      map((data) =>{
        const res: any = data;
        console.log(res.results);
        return res.results ? res.results : [];

      })
    ).subscribe((music) => this.music = music);
  }
  
  ngOnInit(): void {
  }

}
 
