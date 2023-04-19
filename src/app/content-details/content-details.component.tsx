import { Component } from '@angular/core';
import {not} from "@angular/compiler";
import React from 'react';
import service from '../services/in-memory-data.service';
import MessageService from './MessageService';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ContentList from './ContentList';
import AppMessage from './AppMessage';

const ContentDetails = lazy(() => import('./ContentDetails'));


@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})

  class ContentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      isLoading: true
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    ContentService.getContent(params.id)
      .then(content => {
        MessageService.sendMessage(`Retrieved content with id ${content.id} - ${content.title}`);
        this.setState({ content, isLoading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { content, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="content-details">
        <h2>{content.title}</h2>
        <p>By {content.author}</p>
        <p>{content.description}</p>
      </div>
    );
  }
}
<Suspense fallback={<div>Loading...</div>}>
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
</Suspense>

export default ContentDetails;
