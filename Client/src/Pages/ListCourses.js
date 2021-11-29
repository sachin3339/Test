import { Component } from "react";
import Card from "../Components/Card";

class ListCourses extends Component {
    constructor(props){
        super(props);
        this.state={i:[]};
    }

    callAPI() {
        fetch("http://localhost:8012/api/listCourses")
            .then(res => res.json())
            .then(res => this.setState({i : res.results.map((item)=>{
                return <Card title={item.coursename} description={item.Author} buttonText="View Course" src="https://statuo.co.uk/uploads/images/react-logo.jpg" alt="" buttonClassName="btn btn-primary" href="#"></Card>
            })}))
            .catch(err=>err);
    }
    
    componentDidMount() {
        this.callAPI();
    }

    render(){
    return(
        <div>
        {this.state.i}
        </div>
    );}
}
export default ListCourses;