import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



@Injectable()
export class DataService {
  private apiUrl = 'http://localhost:3000'; // Replace with your JSON Server URL

  constructor() { }

  async getData() {
  try {
    const response = await axios.get(`${this.apiUrl}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

}
