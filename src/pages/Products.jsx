// import { useEffect , useState } from 'react'
// import axios from "axios"
// import { useParams } from 'react-router-dom'

// export default function Products() {

// const { CategoryName } = useParams()
// const [products, setProducts] = useState([])
//  useEffect (() => {
//   axios.get(`https://dummyjson.com/products/category/${CategoryName}`).then(json => setProducts(json.data.products))
// }, [CategoryName])
 

//   return (
//     <div className="container">
//     <div className="my-5 text-center">
//         <h1>{CategoryName}</h1>
//         <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam architecto!</p>
//     </div>

//     <div className="row">
//         {
//             products.map((val, key) =>

//                 <div className="col-md-6 my-4" key={key}>
//                     <Link className='text-decoration-none' to={`/products/${val.id}`}>
//                         <Card>
//                             <Card.Img variant="top" src={val.thumbnail} />
//                             <Card.Body>
//                                 <Card.Title>{val.title} - {val.price}$</Card.Title>
//                                 <Card.Text>{val.description}
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Link>
//                 </div>

//             )
//         }
//     </div>
// </div>
// )
// }

  // import React from 'react'
  
  // export default function Products() {
  //   return (
  //     <div>Products</div>
  //   )
  // }
  
                
                
                
                


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '/src/pages/products.css'
export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(json => setProducts(json.data.products))}, [])

  return (
    <>

    <div className="container-fluid pro">
      <div className="my-3 text-center">
        <h1>PRODUCTS</h1>
        
        <p className="text-secondary text-blue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem tenetur obcaecati aperiam modi, eaque hic dolorum ad tempora culpa ea excepturi tempore! Accusamus vero recusandae nostrum fugiat omnis nemo. </p>
      </div>


      <div className="container">
        <div className="row" >
        {/* style={{ display:'-ms-flexbox' ,alignItems :'center' ,width:'100%' ,marginTop:'30px'}} */}
          {
            products.map((val, key) =>
              <div className="col-md-4" key={key}>
                <Link to={`/products/${val.id}`} className='text-decoration-none'>
                  <Card className='stop' >
                    <Card.Img variant="top" src={val.thumbnail} />
                    <Card.Body>
                      <Card.Title >{val.title} -${val.price}</Card.Title>
                      <Card.Text>{val.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            )
          }

        </div>
      </div>
    </div>
    </>
  )
}