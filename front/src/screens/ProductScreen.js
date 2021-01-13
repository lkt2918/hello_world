import React, { useEffect, useState } from 'react';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';
const ProductScreen = (props) => {
    /* get the detail from front end 
    const [products, setProducts] = useState([]);
    useEffect(() =>{
      const fetchData = async () =>{
        const { data } = await axios.get('/api/products');
        setProducts(data);
      }
      fetchData();
    },[])
    const product = products.find(x => x._id === props.match.params.id);
     if(!product) {
        return <div>Product Not Found</div>
    }
    */
    const dispatch = useDispatch();
    /*
    The library passes in a prop called match into every route that is rendered. 
    Inside this match object is another object called params.
     This holds all matching params where the key is the name we specified 
     when creating the route and the value is the actual value in the URL 
    */
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);


    return (
        <div>
            {loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox variant="danger">{error}</MessageBox>
                    : <div>
                        <Link to="/">Back to result</Link>
                        <div className="row top">
                            <div className="col-2">
                                <img className='large' src={product.image} alt={product.name}></img>
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li>
                                        <h1>{product.name}</h1>
                                    </li>
                                    <li>
                                        <Rating
                                            rating={product.rating}
                                            numReviews={product.numReviews}
                                        ></Rating>
                                    </li>
                                    <li>Price : ${product.price}</li>
                                    <li> Description :
                            <p>{product.description}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-1">
                                <div className='card card-body'>
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>Price</div>
                                                <div className="price">${product.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div>Status</div>
                                                <div>
                                                    {product.countInStock > 0 ? (
                                                        <span className="success">In Stock</span>
                                                    ) : (
                                                            <span className="danger">Unavaliable</span>
                                                        )}
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="primary block">Add to Cart</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

            }

        </div>






    );
};

export default ProductScreen;