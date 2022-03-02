import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core/testing";
import { AppConfigModule } from "../app-config/app-config.module";
import { Music } from "../model/music";

export class ItuneService {
    public query!: String;
    constructor(private http: HttpClient, @inject(APP_CONFIG) private config: AppConfig){
        
    }

    public search(queryTitle: String){
        this.query = queryTitle;
        this.http.get('${this.config.apiEndPoint}')
        
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