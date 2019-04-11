import React from "react";
import axios from "axios";

class CatBreeds extends React.Component{
    state = {
        breeds: [],
        breed: "abys",
        selectedBreed: {},
        images: [],
    }

    componentDidMount(){
        let queryParams = {
            breed_ids: this.state.breed,
            limit: 8
        }

        axios.defaults.headers.common['x-api-key'] = "9905a9b7-0dbe-4977-b24f-5b960d83fa12"

        axios.get('https://api.thecatapi.com/v1/breeds/')
            .then(res => {
                this.setState({breeds: res.data});
            }) 

        axios.get('https://api.thecatapi.com/v1/images/search', { params: queryParams} )
            .then(res => {
                this.setState({images: res.data});
            })
    }

    handleBreedChange = (event) => {
        this.setState({breed: event.currentTarget.value});

        let queryParams = {
            breed_ids: event.currentTarget.value,
            limit: 8
        }

        axios.get('https://api.thecatapi.com/v1/images/search/', { params: queryParams} )
            .then(res => {
                this.setState({images: res.data});
            })

        axios.get('https://api.thecatapi.com/v1/breeds/', {} ) 

    }

    renderBreedList(){
        let breedList = [];

        this.state.breeds.forEach(element => {
            breedList.push(
                <option value = {element.id} key = {element.id}>{element.name}</option>
            )
        })

        return(
            <select name = "breeds" value = {this.state.breed} onChange = {this.handleBreedChange}>{breedList}</select>
        )
    }

    renderInfo(){
        return(
            <div className = "breedDesc">{this.state}</div>
        )
    }

    renderImages(){
        let x = 0;
        let cloneImages1 = []
        let cloneImages2 = []

        if(this.state.images.length > 0){
            this.state.images.forEach(image => {
                if(x < 4){
                    cloneImages1.push(
                        <td>
                            <img src = {image.url} alt = {this.state.breed + x} key = {x} />
                        </td>
                    )
                }
                else{
                    cloneImages2.push(
                        <td>
                            <img src = {image.url} alt = {this.state.breed + x} key = {x}/>
                        </td>
                    )
                }
                x++;
            })
        }

        return(
            <table>
                <tr>
                    {cloneImages1}
                </tr>
                <tr>
                    {cloneImages2}
                </tr>
            </table>
        )
    }

    render(){
        return(
            <div>
                {this.renderBreedList()}
                {this.renderImages()}
            </div>
        )
    }
}

export default CatBreeds;