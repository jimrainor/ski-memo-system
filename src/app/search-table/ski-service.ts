import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, catchError, retry, finalize } from 'rxjs/operators';

@Injectable()
export class SkiService {

    // skimemo_path = './assets/ski-memo.json';

    constructor(private httpClient: HttpClient) { }

    getSkiitem(): Observable<HttpResponse<any>> {
        const apiUrl = `${environment.restBaseUrl}/trip/selectList`;

        const options = {
            observe: 'response' as 'response',
            params: undefined,
            withCredentials: true
        };

        return this.httpClient.get(apiUrl, options).pipe(
            retry(environment.restRetry),
            map((res: HttpResponse<Object>) => this.handleResponse(res)),
        );
    }

    writeSkiitem(data) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }),
            observe: 'response' as 'response',
            params: null,
            withCredentials: true
        };

        const apiUrl = `${environment.restBaseUrl}/trip/updateTripInfo`;

        console.log('^^^^^^^^^^^^^^^^^^^writeSkiitem post START^^^^^^^^^^^^^^^');
        return this.httpClient.post(apiUrl, data, options);
    }

    private handleResponse(res: HttpResponse<Object>): any {
        return { headers: res.headers, body: res.body || '' };
    }

    private handleHttpError(error: HttpErrorResponse): any {
        throw error;
    }
}
