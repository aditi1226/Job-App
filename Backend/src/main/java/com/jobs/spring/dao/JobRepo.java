package com.jobs.spring.dao;

import com.jobs.spring.object.NewJobObject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JobRepo extends CrudRepository<NewJobObject,String>
{

    @Query(value = "from NewJobObject where jobProfile=?1")
    List<NewJobObject> findByJobProfile(String profile);


    @Query(value="select distinct jobProfile from NewJobObject ")
    List<String> findallprofiles();

    @Query(value="select distinct companyName from NewJobObject ")
    List<String> findallcompanies();

    @Query(value="from NewJobObject where jobProfile=?1 and companyName=?2")
    List<NewJobObject> findByJobProfileandCompany(String profile, String company);

    @Query(value="from NewJobObject where companyName=?1")
    List<NewJobObject> findByCompany(String company);
}
