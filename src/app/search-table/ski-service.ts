import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SkiService {

    constructor(private httpClient: HttpClient) {}
    skimemo_path = './assets/ski-memo.json';

    getSkiitem() : Observable<any>{
        return this.httpClient.get(this.skimemo_path);
    }
}