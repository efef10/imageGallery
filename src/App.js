import React, { Component } from 'react';
import Picture from './Picture.js'
import './App.css';
// import FontAwesome from 'react-fontawesome';
import {Api} from './Api'


class App extends Component {
    constructor(){
        super();
        this.reader = new FileReader();
        this.state = {pictures:[]}
    }

    async componentWillMount(){
        let myPictures = await Api.getPictuers();
        this.setState({pictures:myPictures.pictures});
    }

    componentDidMount(){
        this.reader.onload = async () =>{
            await Api.addPicture({src:this.reader.result});
            let myPictures = await Api.getPictuers();
            this.setState({pictures:myPictures.pictures});
        };
    }

    handleFileImport=(files)=>{
        for (let file of files){
            this.reader.readAsDataURL(file);
        }
    }

  render() {
        const list = this.state.pictures.map((picture,idx)=>{
            return <Picture key={idx} src={picture}/>
        })
    return (
      <div className="App">
          <ul>
            <li> <label htmlFor="upload-photo"><Picture src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAAxMTHx8fEMDAw1NTXOzs76+vqhoaEQEBCKiord3d1ycnLV1dXa2tpiYmLr6+saGhqXl5fHx8e4uLhGRkZ4eHhcXFw/Pz9QUFCampri4uKnp6dpaWm3t7eAgICOjo4nJyeFhYUdHR1BQUGurq5KSkpoYOHfAAAD5UlEQVR4nO2di1LqMBRFSREKSnkrD1FA0f//ROl17ox6TXpO0jtnp7PXD3SvaUnakuz2eoQQQgghhHxjPq2Gq2F1N7cO8l+olpvixn0yHswOd9aB2qW/HLufFIfSOlZrlLf/6H0y6ojjauERdG4wtQ7XBkuvX82zdbx0jkFB5w7WAVN5aRB07s06YhpvjYLODa1DpjAVCDrXt46ZwEVkuLGOGc9IJOjc2jpoLH3/RPidIteZX3oK8x1PC7HhxTpqHEOxoHN53r013c185WQdNgrpOFNztg4bQ18hmOesv1IZrqzjRiCfK2pyfMTQDDTOHa3jRrBRGc6s40ZwrzK8t44bwUBlOLCOG4H8nq2msI4bAQ1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYgPDWmIDw1piA8NaYhPJivZp+vlZLcdFHp0glfFmGNsd5PlOr5DpHzTbQqxY/Ycs812+mCdW8VReybnE+vIah5UG/wkVQhwjBU7/J6sw0ZyK/Qr362TRjORGcqqHjB56vIl+slLs+DBOmMijR0bj9YJUxk3TRr5zYM/abhOsz+FV8KNfifreC2wDBpap2uDRUiwsk7XCqGilL11uFYYBQx31uFaIdSspSlcweXVL6grXMHFP+l3YTasefQadmModa7yGmq6q5DxNzHSMBf8hrKqSnz8v8O5dbSW8I+lnbjxvhJ4A761ztYKgXuanq94Oy9CrVq6FjlUQt1vpXW4VggWaeb1h9PvhH6G3ZgRw+9pejPrfOk0fD0j/5PY2MDYXBMPTvMHULRLDMAQ1Ern/aAv+gcx52lfWKG5ts4Zzbt01UmuT8KKmtd+lq+G93LBK4fsXg7v/E/2ntP4yyeagNnF1GWXz7msa3u9jV+9NxxNLufF+EaP9gqIOsbivJ2d1umfcSv7EZTKFbRxB0l2S6H7a4RpSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfGhIQ3xoSEN8aEhDfDJpSk7gXmUo3HQGhW47Sqi9CpWjyrBx9y4gI5VhqGMNFd1W1JiNWdboym5UVdUoaATDTQ+oaDo2BPW/gGh+iP7uKmRK+UbbHO/ZauSFtjnOFTXi0XSR5UhaIz2JodojbMqzSPBinTMB2XAavxEbAMl1KuhbQaa5lelkHTGVpk8tnKwDphPu8ct3GP3C+sbrV2jbOkDp+9q19radCG0y/6UopTh0x+8P1X5T/L1cx4PZIetJ0Mt8Wg1Xw+ouvYyEEEIIIYR0jA+1QlSBkPoR1wAAAABJRU5ErkJggg=="}/></label>
                <input type="file" accept=".png,.jpg,.jpeg" name="photo" id="upload-photo" onChange={(e) => this.handleFileImport(e.target.files) }/>
            </li>
            {list}
            </ul>
      </div>
    );
  }
}

export default App;
