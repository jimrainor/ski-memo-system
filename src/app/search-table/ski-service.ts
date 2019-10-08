import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SkiService {

    constructor(private httpClient: HttpClient) { }
    skimemo_path = './assets/ski-memo.json';

    getSkiitem() {
        return this.httpClient.get<any>(this.skimemo_path)
            .toPromise()
            .then(data => data);
    }
}
