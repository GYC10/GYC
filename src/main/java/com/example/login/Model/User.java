package com.example.login.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@Entity
@Data
@Table(name="login")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class User {
    @Column
    @Id
    private Long userid;
    @Column
    private String userName;
    @Column
    private String userPassword;
    @Column
    private LocalDate birth;
}

