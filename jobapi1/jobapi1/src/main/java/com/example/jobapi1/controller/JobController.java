package com.example.jobapi1.controller;

import com.example.jobapi1.exception.ResourceNotFoundException;
import com.example.jobapi1.repository.JobRepository;
import com.example.jobapi1.service.JobService;
import com.example.jobapi1.model.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping(value = "api/v3/Jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    private JobRepository jobRepository;
    @PostMapping
    public Job addJob(@RequestBody Job job) {
        return jobService.addjob(job);
    }
    @PostMapping("/save")
    public ResponseEntity<Void> save(@RequestBody List<Job> jobs){
        jobService.saveJobs(jobs);
        System.out.println("Data saved");
        return new ResponseEntity<>(HttpStatus.OK);

    }
    @GetMapping
    public List<Job> getAllJobs()
    {
        return jobService.getJobList();
    }
    @GetMapping("/jobs/{id}")
    public ResponseEntity<Job> getjobById(@PathVariable  Integer id){
        Job job=jobService.getById(id);
        return ResponseEntity.ok(job);

    }

    @PutMapping("{id}")
    public ResponseEntity<Job> updateJob(@PathVariable int id,@RequestBody Job JobDetails) {
        Job updateJob = jobService.getJob(id);

        updateJob.setJob_title(JobDetails.getJob_title());
        updateJob.setJob_type(JobDetails.getJob_type());
        updateJob.setJob_location(JobDetails.getJob_location());

        jobService.updateJob(id,JobDetails);

        return ResponseEntity.ok(updateJob);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Map<String,Boolean>> deletejob(@PathVariable int id){
        Job job=jobService.getById(id);
        jobService.deleteJob(id);
        Map<String,Boolean> response =new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}