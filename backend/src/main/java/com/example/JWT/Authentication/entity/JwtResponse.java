package com.example.JWT.Authentication.entity;

import java.util.List;

public class JwtResponse {
  private String token;
  private String type = "Bearer";
  private Integer id;
  private String userName;
  private String email;
//  private List<String> roles;

  public JwtResponse(String accessToken, Integer id, String userName, String email) {
    this.token = accessToken;
    this.id = id;
    this.userName = userName;
    this.email = email;
  }

  public String getAccessToken() {
    return token;
  }

  public void setAccessToken(String accessToken) {
    this.token = accessToken;
  }

  public String getTokenType() {
    return type;
  }

  public void setTokenType(String tokenType) {
    this.type = tokenType;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getUsername() {
    return userName;
  }

  public void setUsername(String userName) {
    this.userName = userName;
  }
}