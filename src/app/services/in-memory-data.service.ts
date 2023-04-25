import { InMemoryDbService } from "angular-in-memory- web-api";
import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {constructor} from "axios";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})

  export class InMemoryDataService implements InMemoryDbService {


  genId(content: Content[]): number {
    return content.length <= 0 ? 2000 : Math.max(...content.map(c => c.id)) + 1;
  }

  createDb() {

// setting it to the value of our array of content
    const content: Content[] = CONTENT;
    return {content};

  }


  constructor() {

  }
}
