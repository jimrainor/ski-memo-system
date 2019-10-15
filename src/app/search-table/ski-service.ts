import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { retry } from 'rxjs/internal/operators/retry';
import { catchError } from 'rxjs/internal/operators/catchError';
import { finalize } from 'rxjs/internal/operators/finalize';

@Injectable()
export class SkiService {

    skimemo_path = './assets/ski-memo.json';

    constructor(private httpClient: HttpClient) { }

    getSkiitem(): Observable<HttpResponse<any>> {
        const apiUrl = `${environment.restBaseUrl}/trip/selectList`;

        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }),
            observe: 'response' as 'response',
            params: undefined,
            withCredentials: true
        };

        return this.httpClient.get(apiUrl, options).pipe(
            retry(environment.restRetry),
            map((res: HttpResponse<Object>) => this.handleResponse(res)),
        );

        // return this.httpClient.get<any>(this.skimemo_path, this.httpOptions)
        //     .toPromise()
        //     .then((data) => {
        //         console.log('getSkiitem data:');
        //         console.log(data);
        //         return data;
        //     });
    }

    writeSkiitem(data) {
        const apiUrl = `${environment.restBaseUrl}/trip/updateTripInfo`;

        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }),
        };

        return this.httpClient.post(apiUrl, data, options)
            .pipe(retry(environment.restRetry),
                map((res: HttpResponse<Object>) => this.handleResponse(res)),
                catchError((error: HttpErrorResponse) => this.handleHttpError(error)),
                finalize(() => {
                }));
    }

    private handleResponse(res: HttpResponse<Object>): any {
        return { headers: res.headers, body: res.body || '' };
    }

    private handleHttpError(error: HttpErrorResponse): any {
        throw error;
    }
}
