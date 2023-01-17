package com.example.JWT.Authentication.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.JWT.Authentication.dao.UserRepository;
import com.example.JWT.Authentication.entity.CustomUserBean;
import com.example.JWT.Authentication.entity.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService, UserService {
	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUserName(username).orElseThrow(
				() -> new UsernameNotFoundException("User with " + "user name " + username + " not found"));
		return CustomUserBean.createInstance(user);
	}
	
	@Override
	public List <User> findAll() {
        return userRepository.findAll();
    }
	
	@Override
	public void delete(Integer id) {
		userRepository.deleteById(id);
	}

}
