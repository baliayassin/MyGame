import React , {Component} from 'react'
import Idea  from "./Idea"


class IdeaList extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            ideas:[ 
                {
                    id:3,
                    idea:'Tripper API'
                },
                {
                    id:7,
                    idea:'Cyber Crawler App'
                },
            ]
        }

        this.eachIdea = this.eachIdea.bind(this);
    }

    eachIdea(idea,i){
       return <Idea key = {i} index={i}>
        {idea.idea}
       </Idea> 
    }
    render(){
        return ( 
            <div className='ideaList'>
                  {this.state.ideas.map(this.eachIdea)}
            </div>
        )
    }
}

export default IdeaList