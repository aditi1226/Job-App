package com.jobs.spring.dao;

import com.jobs.spring.object.SignUpObject;
import org.springframework.data.repository.CrudRepository;

public interface ProfileRepo extends CrudRepository<SignUpObject,String>
{

}
