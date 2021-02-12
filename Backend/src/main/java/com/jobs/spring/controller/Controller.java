package com.jobs.spring.controller;

import com.jobs.spring.dao.JobRepo;
import com.jobs.spring.dao.ProfileRepo;
import com.jobs.spring.object.NewJobObject;
import com.jobs.spring.object.SignUpObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class Controller {


    @Autowired
    ProfileRepo profileRepo;
    @Autowired
    JobRepo jobRepo;
    @GetMapping("/login/{username}/{password}")
    @ResponseBody
    public String  login(@PathVariable String username,@PathVariable String password)
    {
        SignUpObject object=profileRepo.findById(username).orElse(new SignUpObject());
        String pass=object.getPassword();
        if(pass==null)
        {
            return "invalid";
        }
        if(pass.equals(password))
            return "Logged In";

        else
        {
            System.out.println(object.getPassword());
            System.out.println(password);
            return "invalid userid or password";
        }

    }
    @PostMapping("/signup")
    public String signup(@RequestBody SignUpObject signupobject)
    {
        profileRepo.save(signupobject);
        return "success";
    }

    @PostMapping("/postjobs")
    public String postJobs(@RequestBody NewJobObject newjob)
    {
        jobRepo.save(newjob);
        return "Added";
    }
    @GetMapping("/getjobs/{profile}/{company}")
    public List<NewJobObject> getJobsByProfileandCompany(@PathVariable String profile, @PathVariable String company)
    {
        List<NewJobObject> list=jobRepo.findByJobProfileandCompany(profile,company);
        return list;
    }
    @GetMapping("/getjobsbyprofile/{profile}")
    public List<NewJobObject> getJobsByProfile(@PathVariable String profile)
    {
        List<NewJobObject> list=jobRepo.findByJobProfile(profile);
        return list;
    }

    @GetMapping("/getjobsbycompany/{company}")
    public List<NewJobObject> getJobsBycompany(@PathVariable String company)
    {
        List<NewJobObject> list=jobRepo.findByCompany(company);
        return list;
    }
    @GetMapping("/getprofiles")
    public List<String> getProfile()
    {
        List<String> list=jobRepo.findallprofiles();
        return list;
    }
    @GetMapping("/getcompanies")
    public List<String> getCompanies()
    {
        List<String> list=jobRepo.findallcompanies();
        return list;
    }

}
