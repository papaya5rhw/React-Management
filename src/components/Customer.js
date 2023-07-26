import React from 'react';

//동적
class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
           <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
           </div> 
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

//정적
function Customer2(){
    return(
        <div>
            <h2>홍길동</h2>
            <p>12345</p>
            <p>남자</p>
            <p>대학생</p>
        </div>
    );
}

export default Customer;
//export default Customer2;