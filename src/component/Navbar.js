import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Navbar = ({authenticate,setAuthenticate}) => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];
    let [width, setWidth] = useState(0);
    const navigate = useNavigate()
    // const goToLogin=()=>{
    //     if (authenticate) {
    //         // 로그아웃 상태일 때, 로그인 페이지로 이동
    //         navigate("/login");
    //     } else {
    //         // 로그인 상태일 때, 로그아웃 처리 및 홈 페이지로 이동
    //         // setAuthenticate(!authenticate);
    //         navigate("/");
    //     }
    // }

    const goToLogin = () => {
        if (authenticate === false) {
          setAuthenticate(true); // 로그인 상태로 변경
          navigate("/login"); // 홈페이지로 이동
        } else {
          setAuthenticate(false); // 로그아웃 상태로 변경
          navigate("/"); 
        }
      };

    const goToMain=()=>{
        navigate("/")
    }
    const search = (event) => {
        if(event.key === "Enter"){
            // console.log("Enter key")
            //입력한 검색어를 읽어와서
            let keyword = event.target.value
            // console.log(keyword)
            //url을 바꿔준다
            navigate(`/?q=${keyword}`)
        }
               
    }
  return (
    <div>
      <div>
        {/* <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div className='login'>로그인</div>
        </div> */}
        <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
        
        <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        </div>

        <div>
            <div className="login-button" onClick={()=>goToLogin()}>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='login'>{authenticate ? '로그아웃' : '로그인'}</div>
            </div>
        {/* {authenticate? (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div className='login'>로그아웃</div>
          </div>
        ) : (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div className='login'>로그인</div>
          </div>
        )} */}
        </div>
          
      </div>
      <div className='nav-section' onClick={goToMain}>
        <img 
            width = {100} 
            src='https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg' alt="Logo"/>
      </div>
      <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' placeholder='제품검색' onKeyPress={(event) => search(event)} />  
                {/* placeholder='제품검색' className="input-box" className="search-icon" */}
            </div>
      </div>
    </div>
  )
}

export default Navbar
