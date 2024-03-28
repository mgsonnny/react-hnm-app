import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];
    const navigate = useNavigate()
    const goToLogin=()=>{
        navigate("/login")
    }
    const goToMain=()=>{
        navigate("/")
    }
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div className='login'>로그인</div>
        </div>
          
      </div>
      <div className='nav-section' onClick={goToMain}>
        <img 
            width = {100} 
            src='https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg' />
      </div>
      <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input className="input-box" type='text' placeholder='제품검색'/>
            </div>
      </div>
    </div>
  )
}

export default Navbar
