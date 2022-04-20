import React from 'react';

export default function IncrementButton(props) {

return <button type="button" className="btn btn-success mr-3 pl-5 pr-5" onClick={() => props.count()} > Add to cart </button>
}