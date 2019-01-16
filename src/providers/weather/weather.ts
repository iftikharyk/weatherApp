import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI. Apikey: ce02429f4e33bc34774248c574d6268d

test
99dfe35fcb7de1ee
http://api.wunderground.com/api/99dfe35fcb7de1ee/conditions/q/CA/San_Francisco.json
*/
@Injectable()
export class WeatherProvider {

  apikey = '99dfe35fcb7de1ee';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }

  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res);
  }

}
