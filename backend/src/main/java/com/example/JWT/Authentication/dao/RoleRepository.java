package com.example.JWT.Authentication.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.JWT.Authentication.entity.Role;
import com.example.JWT.Authentication.entity.Roles;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
  Optional<Role> findByRoleName(Roles role);
}
