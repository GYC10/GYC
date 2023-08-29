import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function LoginPage() {
    const [userid, setuserid] = useState("");
    const [userName, setuserName] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [birth, setbirth] = useState("");
    const savejoin = (e) => {
        e.preventDefault();
    }
    const join = { userid, userName, userPassword, birth };
   const onidHandler = (event) => {
        setuserid(event.currentTarget.value);
    }
    const onuserNameHanler = (event) => {
        setuserName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setuserPassword(event.currentTarget.value);
    }
    const onbirthHandler = (event) => {
        setbirth(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log('id', userid);
        console.log('Password', userPassword);

    }
    const onClickLogin = () => {
        console.log("click login");
        console.log("ID :", userid);
        console.log("PW :", userPassword);
        axios.post("http://localhost:9080/users/join", {
            id: userid,
            name: userName,
            password: userPassword,
            birth: birth
        })
            .then((res) => {
                console.log(res);
                console.log("res.data.userId ::", res.data.userid);
                if (res.data.id === undefined) {
                    console.log("�Է��Ͻ� id�� ��ġ���� �ʽ��ϴ�.");
                }
                else if (res.data.id === null) {
                    console.log("�Է��Ͻ� ��й�ȣ�� ��ġ���� �ʽ��ϴ�.")
                }
                else if (res.data.id === userid) {
                    console.log("�α��� ����");
                    sessionStorage.setItem("id", userid);
                    sessionStorage("userName", userName);
                }
                document.location.href = "/";
            })

           .catch()
    };

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>id</label>
                <input type='id' value={userid} onChange={onidHandler} />
                <label>userName</label>
                <input type='name' value={userName} onChange={onuserNameHanler}/>
                <label>Password</label>
                <input type='password' value={userPassword} onChange={onPasswordHandler} />
                <label>birth</label>
                <input type='birth' value={birth} onChange={onbirthHandler}></input>
                <br />
                <button formAction=''>
                    Login
                </button>

            </form>
        </div>
    )
}


export default LoginPage;







