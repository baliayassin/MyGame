import React,{Component} from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdSave from 'react-icons/lib/md/save'
import MdEdit from 'react-icons/lib/md/edit' 
class Idea extends Component{

    constructor(props){
        super(props)
        this.state = {
            editing:false
        }
        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderUI = this.renderUI.bind(this)

    }
    edit(){
        this.setState({
            editing:true
        });
        
    }

    delete(){
        alert('delete it')
    }
    
    save(){
        alert(this.newIdea.value)
    }
    renderForm(){
        return(
            <div>
                <form>
                    <textarea ref={(input) => this.newIdea = input}/>

                        <button><MdSave/></button>   
                </form>
            </div>
        )
    }
    renderUI(){
        return(
            <div className='idea'>
              <p>{this.props.children}</p>
                <span>
                  <button onClick={this.edit}><MdEdit/></button>
                  <button onClick={this.delete}><MdDelete/></button>
                  <button onClick={this.save}><MdSave/></button>

                </span>
            </div>
        )
    }

    render(){
       return this.state.editing ? this.renderForm() : this.renderUI()
    }
}

export default Idea