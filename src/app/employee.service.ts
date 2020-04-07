import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private _url:string="/assets/data/employee.json"
   private _url1:string="/assets/data/WeatherForecast.json"
   private _url2:string="/assets/data/Summary.json"
  //private _url:string="http://localhost:8081/catalog/123"

    public forecasts: WeatherForecast[];
    public cacheForecasts: WeatherForecast[];
    public summaries: Summary[];
constructor(private http:HttpClient) { }
  public getEmployees():Observable<IEmployee[]>
  {
     return this.http.get<IEmployee[]>(this._url);
  }

  public getWetherForecast():Observable<WeatherForecast[]>
  {
    return this.http.get<WeatherForecast[]>(this._url1);
  }

  public getSummary():Observable<Summary[]>
  {
    return this.http.get<Summary[]>(this._url2);
  }

 public filterForeCasts(filterVal: any) 
 {
    if (filterVal == "0")
        this.forecasts = this.cacheForecasts;
    else
        this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
}
}
