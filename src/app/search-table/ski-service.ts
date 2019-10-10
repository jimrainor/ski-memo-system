import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SkiService {

    skimemo_path = './assets/ski-memo.json';

    constructor(private httpClient: HttpClient) { }

    private httpOptions: any = {
        // ヘッダ情報
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        observe: 'body',
        // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
        // ( ここで用意しなくても追加できるけど... )
        body: null
    };

    getSkiitem() {

        return this.httpClient.get<any>(this.skimemo_path, this.httpOptions)
            .toPromise()
            .then((data) => {
                console.log('getSkiitem data:');
                console.log(data);
                return data;
            });
    }

    writeSkiitem(data) {
        console.log('writeSkiitem data:');
        console.log(data);
        return this.httpClient.post(this.skimemo_path, JSON.stringify(data));
    }
}
