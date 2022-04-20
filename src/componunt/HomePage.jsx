import React,{useState, useEffect} from "react";

const HomePage = (props) =>{
    
     const [catTabs, setCatTabs] = useState([]);
     const [selected, setSelected] = useState(null);
     const [count, setCount] = useState(0);
     const [catStored, setCatStored] = useState(props.cartData);
    
    useEffect(() => {
    (async function () {
        let categoryTabs = props.cartData.map(e => e.category);
        let temp = new Set(categoryTabs);
        categoryTabs = [...temp]
        setCatTabs(categoryTabs); 
    })();
    }, [catTabs]);

    const categoryList = (catList) =>{
        let catStored = props.cartData.filter((e) => e.category === catList);
        setCatStored(catStored); 
    }

    const incrementCount = () => {
        setCount(count + 1)
    };

    if(props.cartData.length==[] && catTabs.length==[]){
        return <div>Loading...</div>
    }
    
    return (
        <>   
            <div className="container col-md-12">
                <h1 className="text-center mt-3">Online shoping Products</h1>
                <div className="d-flex justify-content-center">
                    <div>{catTabs.map((e) => <button className="btn btn-info m-1" onClick={() => categoryList(e)} >{e}</button>)}
                        <button className="btn btn-danger m-1" onClick={() => setCatStored(props.cartData)}>Reset</button>
                    </div>
                </div>
                <div className="row">
                    {catStored.map((c)=>{
                        return(

                            <div className="col-md-3 mb-2 mt-3">
                                <div className="card" style={{ width: "22rem", height: "100%" }}>
                                    <img style={{ height: "250px", width: "250px" }} alt="product_image" className="card-img-top mt-2 ml-5" src={c.image} />
                                    <div className="card-body">
                                        <h5 className="text-info">{c.title}<br />
                                            <span className="badge badge-warning">{c.category}</span>
                                        </h5>
                                        <p className="card-text text-success"><b>Rs.{c.price} /-</b></p>
                                        <p className="card-text">{c.description}</p>
                                    </div>
                                    {/* <button className="btn btn-info" onClick={() => setSelected(c)}>view</button> */}
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" onClick={() => setSelected(c)}>
                                    Deatils
                                    </button>

                                </div>
                            </div>                        
                        )
                    })}
                </div>
                {selected!==null ?
                <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                        <div className="card">
                            <div className="card-header" style={{fontWeight:'bold'}}>
                                Product: {selected.category}
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="m-4" alt="product_image" style={{ height: "250px", width: "250px" }} src={selected.image} />
                                    </div>
                                    <div className="card-body col-md-6">
                                        <h5 className="card-title">Title: {selected.title}</h5>
                                        <p className="card-text">Price: {selected.price}</p>
                                        <p className="card-text">Category: {selected.category}</p>
                                        <p className="card-text">Discription:  {selected.description}</p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                        <button type="button" className="btn btn-success mr-3 pl-5 pr-5" onClick={() => incrementCount} > Add to cart </button>
                                        <button type="button" className="btn btn-primary pl-5 pr-5" data-dismiss="modal"> Close </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>:
                <div></div>
                }
            </div>

            
        </>
    );
}
export default HomePage;