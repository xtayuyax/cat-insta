import React from "react";
import axios from "axios";

class CatBreeds extends React.Component{
    state = {
        breeds: [],
    }

    componentDidMount(){
        axios.defaults.headers.common['x-api-key'] = "9905a9b7-0dbe-4977-b24f-5b960d83fa12"

        axios.get('https://api.thecatapi.com/v1/breeds/')
            .then(res => {
                this.setState({breeds: res.data});
            }) 
    }

    renderBreedList(){
        let breedList = [];

        this.state.breeds.forEach(element => {
            breedList.push(
                <option value = {element.name} key = {element.id}>{element.name}</option>
            )
        })

        return(
            <select name = "breeds">{breedList}</select>
        )
    }

    render(){
        return(
            <div>
                {this.renderBreedList()}
            </div>
        )
    }
}

export default CatBreeds;