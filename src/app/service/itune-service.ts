import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import {map} from 'rxjs/operators';
import { Music } from "../model/music";

import { AppConfig, APP_CONFIG } from "../app-config/app-config.module";


@Injectable()

export class ItuneService {
   
    public query: String;
    public music: Music[] = [];

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig){
        this.query = config.apiEndPoint;
    }


    public searchMusic(queryTitle: String){

        this.query = queryTitle;

        this.http.get(`${this.config.apiEndPoint}search?term=${this.query}`).pipe(
           
            map(data =>{
                const res: any =data;
                //console.log(res.results);
                return res.results ? res.results : [];
            })

        ).subscribe((music) => this.music = music);
        
    }


    public moreInfo(musicId: String){
        return this.http.get(`${this.config.apiEndPoint}lookup/?id=${musicId}`);

    }


    public bookFactory (item: any): Music{
        return new Music (
            item.artistNaime,
            item.artistViewUrl,
            item.artistwork30,
            item.artistwork60,
            item.artistwork100,
            item.trackId
        )
    }

     
}

function next(next: any, arg1: (music: any) => Music[]) {
    throw new Error("Function not implemented.");
}
