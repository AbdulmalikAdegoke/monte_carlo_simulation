import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import ProjectDescription from "./DB_ProjectDescription"
import TaskScheduling from "./DB_TaskScheduling"
import Output from "./DB_Output"
import { v4 as uuidv4 } from 'uuid'; // uuid library import for the unique id generation


export default function Dashboard({ userProfile }) {
    const [currentPage,setCurrentPage] = useState(0);

    // const taskItem = {
    //   // taskId:uuidv4(),
    //   taskName:"",
    //   optTime:0,
    //   pesTime:0,
    //   maxTime:0,
    //   risk:[""]
    // }
    // {
    //   // projectTitle:"",
    //   // projectDescription:"",
    //   tasks:[taskItem]
    // }

    const [risks,setRisks] = useState([""]);

    const taskItem = {
      // taskId:uuidv4(),
      taskName:"",
      optTime:0,
      pesTime:0,
      maxTime:0,
      risk:[]
    }

    const [tasks,setTasks] = useState([]);

    const [formData,setFormData] = useState({
        projectTitle:"",
        projectDescription:"",
        tasks:[]
      }
    );

    const [formDataSubmitted,setFormDataSubmitted] = useState(false);

    const formPages = ["DB_ProjectDescription", "DB_TaskScheduling", "DB_Output"];
    
    const currentForm = (page) => {
      if (page === 0) {
        return <ProjectDescription formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <TaskScheduling formData={formData} setFormData={setFormData} tasks={tasks} setTasks={setTasks} risks={risks} setRisks={setRisks} />
      } else {
        return <Output formData={formData} />
      }
    }

    const [formReset,setFormReset] = useState(false)

    function resetFormConfirmation() {
      const wantsToResetForm = !formReset
      setFormReset(wantsToResetForm)
    }
// resetFrom
    function resetForm() {
      const newFormData = {
        projectTitle:"",
        projectDescription:"",
        tasks:[]
      }
      setCurrentPage(0)
      setFormData(newFormData)
      setFormReset(false)
    }

    function toggleFormSubmission(){
      
    }
  return (
    <div className='outlet_Container'>
        <div className='formProgressDiv'
        //  style={{
        //   display:"flex",
        //   flexFlow:"row nowrap"
        // }}
        >
            <span className='formStep'><span style={currentPage===0?{backgroundColor:'#0500FF',color:"white"}:{}} id='numContainer'>1</span><span className='multiForm'>Project Description</span></span>
            <span className='lines'></span>
            <span className='formStep'><span style={currentPage===1?{backgroundColor:'#0500FF',color:"white"}:{}} id='numContainer'>2</span><span className='multiForm'>Task Scheduling</span></span>
            <span className='lines'></span>
            <span className='formStep'><span style={currentPage===2 ||currentPage===3?{backgroundColor:'#0500FF',color:"white"}:{}} id='numContainer'>3</span><span className='multiForm'>Output</span></span>
        </div>

        <br /><br />
        {/* the multi level forms */}
        {currentForm(currentPage)}             
        
        <div className='footer'>
          <Button
          color={currentPage===0?'primary':currentPage===1?'secondary':currentPage===2?"secondary" :"danger"} 
          size='lg'  
          outline={currentPage===1?true:false}
          // {currentPage===1?onClick={}:onClick={}}
          // onClick={currentPage===1?{generateOutput}: {setCurrentPage((currPg) => currPg+1)}}
          onClick={currentPage===0?()=>{setCurrentPage(currentPage+1)}:currentPage===1 || currentPage===2?()=>{setCurrentPage(currentPage-1)}:resetFormConfirmation}
          style={{width:"20%"}}
          disabled={currentPage===0? (formData.projectTitle==="" || formData.projectDescription===""?true:false) :currentPage===1? false:false}
          >
            {currentPage===0?"Next":currentPage===1 || currentPage===2? "Previous": "Cancel"}
          </Button>
          {' '}
          {currentPage>0 &&
            <Button
            color="primary"
            // outline
            size='lg' 
            className='login_button' 
            onClick={currentPage===1?()=>{setCurrentPage(currentPage+1)}:currentPage===2?()=>{setCurrentPage(currentPage+1)}:resetFormConfirmation}
            style={{width:"20%",marginLeft:"5px"}}
            // onClick={previousStep}
            disabled={currentPage===1? (formData.tasks.length===0?true:false):false}
            >
              {currentPage===1?"Next":currentPage===2? "Submit":"Save"}
            </Button>
          }
          
        </div>

        {/* modal for the confirmation of the deletion of the list contents */}
        <Modal
        centered
        scrollable
        isOpen={formReset}
        >
            <ModalHeader>
                Are you sure you want to cancel your made progress?
            </ModalHeader>
            <ModalBody>
                <Button
                color="danger"
                onClick={resetForm}
                >
                    Reset Form
                </Button>
                {' '}
                <br />
                <br />
                <Button 
                color="secondary" 
                onClick={resetFormConfirmation}
                >
                    Cancel
                </Button>
            </ModalBody>
        </Modal>
    </div>
  )
}
