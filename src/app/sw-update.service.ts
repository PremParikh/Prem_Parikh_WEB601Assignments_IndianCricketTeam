import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class SwUpdateService {
  constructor(private swUpdate: SwUpdate) {
  public checkForUpdates():void {
      if(this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate()
        .then(() => console.log('Checking for updates...'))
        .catch(error => console.error('Error checking for updates: ', error));
    }
      else {
      console.warn('Service worker updates are not enabled.');
    }
  }


