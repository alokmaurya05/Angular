import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public emplist=[]
  public studentData:string ="Student Data Display";
  public forecasts: WeatherForecast[];
  public cacheForecasts: WeatherForecast[];
  public summaries: Summary[];
  constructor(private _employeeService:EmployeeService) { }
  
ngOnInit() 
{
 this._employeeService.getEmployees().subscribe(data=>this.emplist=data); 
 this._employeeService.getWetherForecast().subscribe(result => 
    {
  this.forecasts = result;
  this.cacheForecasts = result;}, 
  error => console.error(error));
  this._employeeService.getSummary().subscribe(result => { this.summaries = result; },
   error => console.error(error));
  
  }




}
