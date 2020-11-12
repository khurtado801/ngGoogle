import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = environment.SERVER_URL;
  api_key: string = environment.API_KEY;
  cx_key: string = environment.CX_KEY;

  constructor(private: httpClient: HttpClient) {

   }

   getSearchData = (searchTerm: string) => {
     return this.httpClient.get
   }
}
