 package com.login.Login;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/login")
 public class Login_REST {

    private final Login_InfoRepo loginRepo;

	public Login_REST(Login_InfoRepo lir){
		this.loginRepo = lir;
	}

    public record NewLogReq(String email, String password){}
    
    @GetMapping("{email}")
    public Login_Info verfyLogin(@PathVariable("email") String email){
        try{
           return loginRepo.findByEmail(email).get();
        }catch(java.util.NoSuchElementException e){
            return null;
        }
    }

    @PostMapping("/create")
    public void createNewLoginInfo(@RequestBody NewLogReq req){
        Login_Info info = new Login_Info();
        info.setEmail(req.email());
        info.setPassword(req.password());
        loginRepo.save(info);
    }





}