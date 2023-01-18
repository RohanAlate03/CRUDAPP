package com.example.jobapi1.repository;

import com.example.jobapi1.service.JobService;
import com.example.jobapi1.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Integer> {

}