// import { Injectable } from "@angular/core";
//
// @Injectable({
//     providedIn: 'root',
//   })
//   export class MessageService {
//     messages: string[] = [];
//
//     add(message: string) {
//       this.messages.push(message);
//     }
//
//     clear() {
//       this.messages = [];
//     }
//   }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';

interface Content {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  getContents() {
      throw new Error('Method not implemented.');
  }
  contents: any;
  contentAdded: any;
  updateContent(existingContent: Observable<Content[]>) {
      throw new Error('Method not implemented.');
  }
  private contentUrl = 'api/content';

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.contentUrl);
  }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.contentUrl, content).pipe(
      tap((newContent: Content) => {
        const highestId = this.contents.reduce((acc: number, cur: { id: number; }) => cur.id > acc ? cur.id : acc, 0);
        newContent.id = highestId + 1;
        this.contents.push(newContent);
        this.contentAdded.next(newContent);
      }),
      catchError(this.handleError<Content>('addContent'))
    );
  }

  handleError<T>(arg0: string): (err: any, caught: Observable<Content>) => import("rxjs").ObservableInput<any> {
        throw new Error('Method not implemented.');
    }


  displayMessage(s: string) {

  }
}
