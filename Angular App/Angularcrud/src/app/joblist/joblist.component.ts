import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../job';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent {

  jobs: Job[] = [];
  httpClient: any;
  constructor(private jobservice: JobsServiceService,private router:Router) {}
  ngOnInit() {
    this.getJobs();
    
  }
  private getJobs() {
    this.jobservice.getJobList().subscribe(data=>{
      this.jobs=data;
    })
    
  }
  updatejob(id:number){
    this.router.navigate(["/updatejob",id])
  }
  addJobs(){
    this.router.navigate(["/addjob"]);
  }
  deletejob(id:number){
    this.jobservice.deletejob(id).subscribe(data=>{
      console.log(data);
      this.getJobs();
    },error=>console.log(error))


  }
}
