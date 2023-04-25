import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { IndianCricketService } from './helper-files/indiancricket.service';
import { MessageService } from './helper-files/message.service';
import {Route, Router} from "@angular/router";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContentList from './content-list';
import ContentDetails from '/content-details';
import AppMessage from './AppMessage';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SwUpdateService } from './sw-update.service';


const ContentDetails = lazy(() => import('./ContentDetails'));



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pre_Parikh_IndianCricketTeam';
  contentWithId!: Content;
  selectedItemId: string = '';

  constructor(private cricketService: IndianCricketService,
    private messageService: MessageService,
              private swUpdateService: SwUpdateService,
              private swUpdate: SwUpdate, private snackBar: MatSnackBar,
              private swUpdate: SwUpdate) {}

  ngOnInit() {
    this.getTopContent();
    this.swUpdateService.checkForUpdates();
  }

  getTopContent() {
    const topContentId = 2; // id of the desired top content
    this.cricketService.fetchContentById(topContentId).subscribe((data) => {
      this.contentWithId = data;
    });
  }

  getSingleContent() {
    if (!this.selectedItemId) {
      this.messageService.add('Please enter an item ID.');
      return;
    }
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        const snack = this.snackBar.open('Update available', 'Reload');
        snack.onAction().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        });
      });
      if (this.swUpdate.isEnabled) {
        setInterval(() => {
          this.swUpdate.checkForUpdate().then(() => {
            console.log('Checked for update');
          }).catch(error => {
            console.error('Error checking for update:', error);
          });
        }, 30 * 60 * 1000); // 30 minutes
      }
    const id = parseInt(this.selectedItemId);
    if(isNaN(id) || id < 1){
      this.messageService.add('Unable to retrieve content with id ' + id);

    }
    this.cricketService.fetchContentById(id).subscribe(
      (item: Content) => {
        this.contentWithId = item;
        this.messageService.clear();
      },
      (error) => {
        this.selectedItemId = '';
        this.messageService.add(`Unable to retrieve item with ID ${this.selectedItemId}.`);
      });
  }
    }

  const contents = [
  { id: 1, title: 'Content 1', description: 'Description of content 1' },
  { id: 2, title: 'Content 2', description: 'Description of content 2' },
  { id: 3, title: 'Content 3', description: 'Description of content 3' },
];

  class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/list">Content List</Link>
              </li>
            </ul>
          </nav>
          <AppMessage />
          <Switch>
            <Route exact path="/" component={ContentList} />
            <Route exact path="/list" component={ContentList} />
            <Route path="/content/:id" component={ContentDetails} />
            <Route path="*" render={() => (
              <div>
                <h2>Page not found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/list">Go to content list</Link>
              </div>
            )} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
