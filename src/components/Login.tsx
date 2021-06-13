import { useState } from 'react';

const Login = (): JSX.Element => {

    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    const modal = document.querySelector("#modal");
    const login = document.querySelector("#login");

    const onIDChange = (e: any): void => {
        setId(e.target.value)
    };

    const onPasswordChange = (e: any): void => {
        setPw(e.target.value)
    };

    const onXClicked = (e: any): void => {
        e.preventDefault();
        modal?.classList.toggle("show");
        login?.classList.toggle("show");
    };

    return (
        <div id="login-wrapper">
            <form action="" method="post">
                <table>
                    <thead>
                        <tr>
                            <td>
                                <p id="login-thead-login_p">로그인</p>
                            </td>
                            <td>
                                <button onClick={onXClicked} id="login-X_Btn">X</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>ID</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={id} onChange={onIDChange} />    
                            </td>                          
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Password
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" name="" id="" value={pw} onChange={onPasswordChange} />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><button type="submit">Sign In</button></td>
                        </tr>
                    </tfoot>
                </table>             
            </form>
  
        </div>

    );
}

export default Login;