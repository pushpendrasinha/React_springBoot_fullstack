package com.example.JWT.Authentication.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.JWT.Authentication.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
  
  public boolean existsByEmail(String email);
  public boolean existsByUserName(String userName);
  public Optional<User> findByUserName(String username);
}