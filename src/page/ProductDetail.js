import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';


const ProductDetail = () => {
    let{id} = useParams();
    const[product, setProduct] = useState(null);
    const getProductDetail=async()=>{
        let url = `https://my-json-server.typicode.com/mgsonnny/react-hnm-app/products/${id}`
        // let url = `http://localhost:5000/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        console.log("data", data)
        setProduct(data);
    }
    useEffect(()=>{
        getProductDetail()
    },[])
  return (
    <div>
        <Container>
            <Row>
                <Col className='product-img'>
                    <img src={product?.img} alt="Product img"/>
                </Col>
                <Col>
                    <div className='product-detail-title'>
                        {product?.title}
                    </div>
                    <div className='product-detail-price'>
                        {product?.price}원
                    </div>
                    <div className='product-detail-choice'>
                        {product?.choice==true?"Conscious choice":""} 
                    </div>
                    <div className='product-detail-button'>
                        <DropdownButton id="dropdown-basic-button" title="사이즈">
                        <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div >
                    <Button variant="dark" className='product-detail-add'>추가</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetail
