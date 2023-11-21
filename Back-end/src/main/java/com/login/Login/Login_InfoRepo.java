package com.login.Login;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Login_InfoRepo extends JpaRepository<Login_Info, Integer>{
    Optional<Login_Info> findByEmail(String email);
}