package com.example.login.Service;

import com.example.login.Model.User;
import com.example.login.Repository.UserDao;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserService {
    public static List<User> users = new ArrayList<>();
    private final UserDao userDao; //userrepository
    @Autowired
    public UserService(UserDao userDao){
        this.userDao=userDao;
    }
    public User join(User user){ //가입하고 ->같은 id일경우 중복처리
        Optional<User> exist = userDao.findById(user.getUserid());
        if(exist.isPresent()){
            throw new ResponseStatusException(HttpStatus.CONFLICT,"존재하는 ID입니다.");
        }
        return userDao.save(user);
    }
    public List<User> findAll(){
        return userDao.findAll();
    };
    public void deleteUser(User user){ //userid에 의해 id를 삭제
        userDao.deleteById(user.getUserid());
    }
    public Optional<User> getUserLoginCheck(User user) {//로그인 체크
        return userDao.findByUseridAndUserPassword(user.getUserid(), user.getUserPassword());
    }



    }




