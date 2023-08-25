package com.example.login.Controller;

import com.example.login.Model.User;
import com.example.login.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) { //user
        this.userService = userService;
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) throws Exception {
        Optional<User> user1 = userService.getUserLoginCheck(user);
        if(user1.isEmpty()){ //만약 user1이 비어있다면
            throw new Exception("로그인에 실패했습니다.");//Optional:NPE를 감싸줌
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("")
    public List<User> getAllUsers(){
        return userService.getAllUser();
    }
    @PostMapping("/join")
    public User join(@RequestBody User user){
        return userService.join(user);
    }
    @PostMapping("/delete")
    public void delete(@RequestBody User user){
        userService.deleteUser(user);
    }

}
