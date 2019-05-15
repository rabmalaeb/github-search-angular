import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HeaderOptions } from '../models/general';

@Injectable({ providedIn: 'root' })
export class HttpService {
  /**
   *
   * @param http HttpClient instance that handles api calls
   */
  constructor(private http: HttpClient) { }

  request(url: string, data: object, headerOptions: HeaderOptions[] = null) {
    console.log('headers ', headerOptions);

    let params = new HttpParams();
    Object.keys(data).forEach(key => {
      params = params.append(key, data[key]);
    });

    let headers = new HttpHeaders();
    if (headerOptions) {
      headerOptions.forEach(header => {
        headers = headers.append(header.name, header.value);
      });
    }
    return this.http.get<any>(url, { params, headers }).pipe(
      map(response => {
        return response;
      }),
    );
  }

  post(url: string, data: object) {
    return this.http.post<any>(url, data).pipe(
      map(response => {
        return response;
      })
    );
  }
}
