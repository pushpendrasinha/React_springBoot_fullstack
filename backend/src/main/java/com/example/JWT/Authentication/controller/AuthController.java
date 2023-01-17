package com.example.JWT.Authentication.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.JWT.Authentication.dao.RoleRepository;
import com.example.JWT.Authentication.dao.UserRepository;
import com.example.JWT.Authentication.entity.CustomUserBean;
import com.example.JWT.Authentication.entity.JwtResponse;
import com.example.JWT.Authentication.entity.Role;
import com.example.JWT.Authentication.entity.Roles;
import com.example.JWT.Authentication.entity.SignupRequest;
import com.example.JWT.Authentication.entity.User;
import com.example.JWT.Authentication.security.JwtTokenUtil;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	JwtTokenUtil jwtTokenUtil;

	@PostMapping("/login")
	public ResponseEntity<?> userLogin(@Valid @RequestBody User user) {
		System.out.println("AuthController -- userLogin updated" );

		if (!userRepository.existsByUserName(user.getUserName())) {
			return ResponseEntity.badRequest().body("User not valid " + HttpStatus.BAD_REQUEST);
		}

		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token = jwtTokenUtil.generateJwtToken(authentication);
		
		 CustomUserBean userBean = (CustomUserBean) authentication.getPrincipal();
		 /*List<String> roles = userBean.getAuthorities().stream().map(auth ->
		 * auth.getAuthority()) .collect(Collectors.toList());
		 */
		/*
		 * AuthResponse authResponse = new AuthResponse(); authResponse.setToken(token);
		 * authResponse.setRoles(roles); return ResponseEntity.ok(authResponse);
		 */
		return ResponseEntity.ok(new JwtResponse(token, 
				userBean.getId(), 
				userBean.getUsername(), 
				userBean.getEmail()
				 ));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> userSignup(@Valid @RequestBody SignupRequest signupRequest) {
		if (userRepository.existsByUserName(signupRequest.getUserName())) {
			return ResponseEntity.badRequest().body("Username is already taken " + HttpStatus.BAD_REQUEST.toString());
		}
		if (userRepository.existsByEmail(signupRequest.getEmail())) {
			return ResponseEntity.badRequest().body("Email is already taken " + HttpStatus.BAD_REQUEST.toString());
		}
		User user = new User();
//		Set<Role> roles = new HashSet<>();
		user.setUserName(signupRequest.getUserName());
		user.setEmail(signupRequest.getEmail());
		user.setPassword(encoder.encode(signupRequest.getPassword()));
		System.out.println("Encoded password--- " + user.getPassword());
//		String[] roleArr = signupRequest.getRoles();
//		
//		if(roleArr == null) {
//			roles.add(roleRepository.findByRoleName(Roles.ROLE_USER).get());
//		}
		/*
		 * for(String role: roleArr) { switch(role.toLowerCase()) { case "admin":
		 * roles.add(roleRepository.findByRoleName(Roles.ROLE_ADMIN).get()); break; case
		 * "user": roles.add(roleRepository.findByRoleName(Roles.ROLE_USER).get());
		 * break; default: return
		 * ResponseEntity.badRequest().body("Specified role not found"); } }
		 */
//		user.setRoles(roles);
		userRepository.save(user);
		return ResponseEntity.ok("User signed up successfully");
	}

}