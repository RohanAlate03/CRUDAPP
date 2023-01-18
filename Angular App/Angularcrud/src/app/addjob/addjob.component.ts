import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../job';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent {
  job: Job=new Job();
  constructor(private jobService:JobsServiceService,
    private router:Router){
    
  }

  saveJob(){
    this.jobService.addjob(this.job).subscribe(data=>{
      console.log(data);
      this.goToJobList();
    },
     error=>console.log(error));
  }

  goToJobList(){
    this.router.navigate(['/jobs']);

  }

  onSubmit(){
      console.log(this.job);
      this.saveJob();
  }
}
