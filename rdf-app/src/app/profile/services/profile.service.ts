import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public async getJsonld():Promise<any>  {
    const url = 'assets/model.jsonld';
    //use httpclient to get the jsonld
    const promisedValue = await this.httpClient.get(url).toPromise();
    return promisedValue;
  }
}
