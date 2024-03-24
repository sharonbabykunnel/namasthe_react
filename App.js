import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div>
      <div className="im">
        <img src="https://cdn.vectorstock.com/i/1000v/20/45/food-love-logo-template-vector-40192045.avif"></img>
      </div>
    </div>
    )
}


const AppLayout = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);