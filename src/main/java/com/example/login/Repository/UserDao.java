package com.example.login.Repository;

import com.example.login.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserDao extends JpaRepository<User,Long> {
    Optional<User> findByUseridAndUserPassword(Long userid, String userPassword);

}

//@Repository
//public class UserDao {
//    public static List<User> users;
//
//    static {
//        users=new ArrayList<>();
//        users.add(new User(1L,"testid1","1234","1999-11-31")); //
//        users.add(new User(2L,"testName2","testid2","1999-12-31"));
//        users.add(new User(3L,"testName3","testid3","1992-8-7"));
//        users.add(new User(4L,"testName4","testid4","1992-9-6"));
//        users.add(new User(5L,"testName5","testid5","1996-6-31"));
//    }
//    public List<User> getAllUsers(){ //모든 유저 찾아오기
//        return users;
//    }
//    public User getUserByUserId(String userId){ //user을 참음
//        return users
//                .stream()
//                .filter(user->user.getUserId().equals(userId))
//                .findAny()
//                .orElse(null);
//    }
//    public User join(User user) throws Exception {
//        if (getAllUsers().contains(user.getUserId())) {
//            System.out.println("중복회원이 있습니다.");//user을 집어넣음.
//        } else {
//            users.add(user);
//            return user;
//        }
//        return null;
//    }
//    public void updateUser(String userId, User user){ // insert에 넣은 userId와 user을 집어넣음
//        users.stream()
//                .filter(curUser->curUser.getUserId().equals(userId))
//                .findAny() //조건에 일치하는 요소를 리턴함.
//                .orElse(new User(-1L,"","",""))
//                .setUserName(user.getUserName()); //user에서 name을 가져옴.
//    }
//    public void deleteUser(String userId){ //매개변수 userid== user.userId 같으면 삭제
//        users.removeIf(user->user.getUserId().equals(userId));
//    }
//
//
//}
