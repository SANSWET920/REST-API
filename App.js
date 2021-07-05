import React from "react";
import { View ,Text, FlatList} from "react-native";

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
       data:[]
    }
  }
  componentDidMount()
  {
    this.apiCall();
  }
  async apiCall()
  {
    let resp =await fetch("https://facebook.github.io/react-native/movies.json")
    let respjson= await resp.json()
    //console.warn(respjson)
    this.setState({data: respjson.movies})
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 100 , left:100, marginTop:50}}>API</Text>
        <FlatList
        data={this.state.data}
        renderItem={({item})=>
        <Text style={{ fontSize:30, color:"#696969"}}>{item.title}</Text>}
        />
      </View>
    )
  }
}

export default App;