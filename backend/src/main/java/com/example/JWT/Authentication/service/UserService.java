package com.example.JWT.Authentication.service;

import java.util.List;

import com.example.JWT.Authentication.entity.User;

public interface UserService {
	
	List <User> findAll();
	
	void delete(Integer id);

}
