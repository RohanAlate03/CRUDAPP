package com.example.jobapi1.service;

import com.example.jobapi1.model.Job;
import com.example.jobapi1.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;
@Service
public class JobService implements JobServiceImpl {
    @Autowired
    private JobRepository jobRepository;


    @Override
    public Job getById(Integer id) {

        Optional<Job> optional = jobRepository.findById(id);

        Job form = null;

        if (optional.isPresent())

            form = optional.get();

        else

            throw new RuntimeException(

                    "JOBS not found for id : " + id);

        return form;

    }

    public void saveJobs(List<Job> jobs) {
        jobRepository.saveAll(jobs);
    }

    public Job addjob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getJobList() {
        return jobRepository.findAll();
    }

    public Job getJob(Integer id) {

        return jobRepository.findById(id).orElse(null);
    }

    public Job updateJob(Integer id, Job job) {
        Job existingjob = jobRepository.findById(id).orElse(null);
        existingjob.setJob_type(job.getJob_type());
        existingjob.setJob_title(job.getJob_title());
        existingjob.setJob_location(job.getJob_location());
        return jobRepository.save(existingjob);
    }

    public String deleteJob(Integer id) {
        jobRepository.deleteById(id);
        return "Job removed !!" + id;
    }
}