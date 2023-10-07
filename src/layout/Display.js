// Admin or UserPannel

/*  import React, { Component } from 'react'

export class Display extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn :true
        
      }
    }
    
  render() {
    if(this.state.isloggedIn){
        return <div><h1>Welcome Admin</h1></div>
    }
    else{
        return <div><h1>Welcome User</h1></div>
    }
    }
   
}

export default Display  */

// Form Field With connect Us 

/*  import React, { Component } from 'react'

export class Display extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comments:"",
         techstack:""
      }
    }
    handleUserInput =(event) =>{
        this.setState ({
            username:event.target.value
        })
    }
    handleCommentChange =(event) => {
        this.setState ({
            comments :event.target.value
        })
    }
    handlestack=(event) => {
  this.setState({
    techstack :event.target.value
  })
    }
    btnSubmit = (event) => {
        alert (` ${this.state.username} ${this.state.comments} ${this.state.techstack}`)
        event.preventDefault()
    }
  render() {
    return (
        <>     
        <form onSubmit={this.btnSubmit}>
        <div>
      
      <label>UserName</label>
      <input type="text"
      value={this.state.username}
      onChange={this.handleUserInput} />
      </div>
      <div>
       <label>Comment</label>
       <textarea value = {this.state.comments}
       onChange={this.handleCommentChange}></textarea>
      </div>
      <div>
        <label>Tech-Stack</label>
       <select value= {this.state.techstack}
       onChange={this.handlestack}>
        <option value="Up">up</option>
        <option value="Noida">Noida</option>
        <option value="Dehli">Dehli</option>
        <option value="Gurugaon">Gurugaon</option>
        <option value="Kanpur">Kanpur</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Sambhal">Sambhal</option>
       </select>
       <button>Submit</button>
      </div>
      </form>
      </>
 
    )
  }
}

export default Display  */


// USe Of Axios

/*  import React, { Component } from 'react'
import axios from 'axios'
export class Display extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          posts :[]
       }
     }
      componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then ((response) => {
            console.log(response);
            this.setState({
                posts:response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
      }
    render() {
        const {posts} = this.state
        console.log("pkkkio",posts)
    return (
      <div>
        <h1>PostList Data</h1>
        {
            posts.length ? posts.map ((posts)=> (
            <div key = {posts.id}>
                <div>{posts.body}</div>
            </div>     ))
            :null
       
        }
      </div>
    )
  }
}

export default Display  */



/*
import axios from 'axios'
import React, { Component } from 'react'

export class Display extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserId:"",
        tittle:"",
        body:""
      }
    }
    changehandler = (e) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
handler =(e) =>{
    e.preventDefault()
    console.log("initial object data=",this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
}
  render() {
    const {UserId,tittle,body}=this.state
    return (
        <>
      <div>
        <form onSubmit={this.handler}>
            <div>
                <label>UseId</label>
                <input type="text" name="UserId" value={UserId} onChange={this.changehandler} />
            </div>
            <div>
                <label>Tittle</label>
                <input type="text" name="tittle" value={tittle} onChange={this.changehandler} />
            </div>
            <div>
                <label>Body</label>
                <input type="text" name="body" value={body} onChange={this.changehandler} />
            </div>
            <button type='Submit'>Submit</button>
        </form>
      </div>
      </>
    )
  }
}

export default Display  */

/*
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Display() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      console.log(response.data);
      setPosts(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <div>
    <ul>
      {
        posts.map((post)=>(
          <ul key={post.id}>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </ul>
        )
      
        )
      }
    </ul>
    </div>
  )
}

export default Display*/