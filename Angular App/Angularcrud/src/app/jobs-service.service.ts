import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {
  
  private baseURL="http://localhost:8080/api/v3/Jobs";
  constructor(private httpClient:HttpClient) { }

  getJobList(): Observable<Job[]>{
    return this.httpClient.get<Job[]>(`${this.baseURL}`);  
}

addjob(job:Job):Observable<any>{
  return this.httpClient.post("http://localhost:8080/api/v3/Jobs",job);

}

getJobById(id:number):Observable<Job>{
  return this.httpClient.get<Job>(`http://localhost:8080/api/v3/Jobs/jobs/${id}`);
}

updatejob(id:number,job:Job):Observable<any>{
  return this.httpClient.put(`http://localhost:8080/api/v3/Jobs/${id}`,job);
}
deletejob(id:number):Observable<Object>{
  return this.httpClient.delete(`http://localhost:8080/api/v3/Jobs/${id}`);
}
}
