import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../job';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent {
  job:Job=new Job();
  id!: number;
  
  constructor(private jobservice: JobsServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit():void{
      this.id=this.route.snapshot.params['id'];
      this.jobservice.getJobById(this.id).subscribe(data=>{
      this.job=data;

  
      },error=>console.error(error)
      )
  
    }
    
  
    onSubmit(){
      this.jobservice.updatejob(this.id,this.job).subscribe(data=>{
        this.goToJobList();
      },error=>console.error(error))
  
    }
    goToJobList(){
      this.router.navigate(['/jobs']);
  
    }
}
