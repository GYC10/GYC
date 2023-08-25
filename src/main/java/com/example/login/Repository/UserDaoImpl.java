package com.example.login.Repository;

import com.example.login.Model.User;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
//@Repository
//public class UserDaoImpl implements UserDao { //userDao를 상속받
//    public static List<User> users; //user을 list형식으로
//   static {
//       users=new ArrayList<>();
//        users.add(new User(1L,"testid1","1234", LocalDate.of(1999,11,18))); //        users.add(new User(2L,"testName2","testid2","1999-12-31"));
//        users.add(new User(3L,"testName3","testid3",LocalDate.of(1999,8,3)));
//        users.add(new User(4L,"testName4","testid4",LocalDate.of(2001,12,31)));
//        users.add(new User(5L,"testName5","testid5",LocalDate.of(20002,9,18)));
//    }
//
//    public User getUserByUserId(Long userId){ //id로 User을 찾음.
//        return users
//                .stream()
//                .filter(user->user.getUserId().equals(userId))
//                .findAny()
//                .orElse(new User(-1L,"","",LocalDate.of(1111,1,1)));
//    }
//
//    public void updateUser(Long userId, User user) { //유저 업데이트
//        users.stream()
//              .filter(curUser->curUser.getUserId().equals(userId))
//                .findAny() //조건에 일치하는 요소를 리턴함.
//                .orElse(new User(-1L,"","",LocalDate.of(1111,11,11)))
//                .setUserId(user.getUserId()); //user에서 id을 가져옴.
//    }
//
//    public void deleteUser(Long userId) { //유저아이디 삭제
//        users.removeIf(user->user.getUserId().equals(userId));
//    }
//
//
//    public List<User> getAllUsers() {//모든 유저를 불러움
//        return users;
//    }
//}

