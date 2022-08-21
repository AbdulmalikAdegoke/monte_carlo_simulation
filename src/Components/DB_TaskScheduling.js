import React, {useState,useRef} from 'react'
import { Form, Input, InputGroup, Label, Button, Table, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import ProjectTasks from "./ProjectTasks"
import { v4 as uuidv4 } from 'uuid'; // uuid library import for the unique id generation
import 'antd/dist/antd.css';
import { Empty } from 'antd';

import { Formik } from 'formik';

import FormField from './FormField';
// import FormField from '../FormField';

// import FormField from '../FormField';


export default function DB_TaskScheduling({ formData, setFormData, tasks, setTasks, risks, setRisks, projectTaskFormValidation }) {
  const [addTask,setAddTask] = useState(false)
  // const [temporaryRisk,setTemporaryRisk] = useState([]) // state of risk whilst still in the edit form before saving or cancellation

  // const [task,setTask] = useState([]);
  // useRef hooks for the task fields
  const tNameRef= useRef()
  const oTimeRef= useRef()
  const pTimeRef= useRef()
  const mTimeRef= useRef()
  const rNameRef= useRef([])

  // function for handling the confirmation of adding tasks
  // this toggles the state: addTask to help with the modal display for adding tasks
  function addTaskConfirmation() {
      const add = !addTask
      setAddTask(add)
  }
  // {
  //     taskId:uuidv4(),
  //     taskName:"",
  //     timeTo:0,
  //     estTp:0,
  //     monthTm:0,
  //     risk:[""]
  //   }

  const taskItem = {
      taskId:uuidv4(),
      taskName:"",
      optTime:0,
      pesTime:0,
      maxTime:0,
      risk:risks
    }

  // function for handling the adding of the tasks to the current form data
  // this updates the current form data state- specifically the task attribute
  function addTaskHandler() {
      setFormData({...formData,tasks:[
          ...formData.tasks,{
              taskName:tNameRef.current.value,
              optTime:oTimeRef.current.value,
              pesTime:pTimeRef.current.value,
              maxTime:mTimeRef.current.value,
              editing:false,
              risk:risks
            }
      ]})
      console.log(formData)
      addTaskConfirmation()
      setRisks([""])
  }

  function deleteTaskHandler(index) {
      console.log(index)
      const updatedTasks = [...formData.tasks]
      updatedTasks.splice(index, 1) // deleting the specified risk
      setFormData({...formData,tasks:updatedTasks})
  }
  const riskArr =[]
  
  function addRiskHandler() {//id, addedRisk
      setRisks([...risks,""])
  }

  function deleteRiskHandler(id) {
      const updatedRisks = [...risks]
      updatedRisks.splice(id, 1) // deleting the specified risk
      setRisks(updatedRisks) // updating the risks
  }

  function toggleEditTask(id) {
      const newFormDataTasks = [...formData.tasks]
      const taskDataFromFormData = newFormDataTasks[id]
      console.log(taskDataFromFormData.editing)
      taskDataFromFormData.editing = !taskDataFromFormData.editing
      console.log("New: ",taskDataFromFormData.editing)
      setFormData({...formData,tasks:newFormDataTasks})
  }

  function toggleSaveEdit(id,pTimeRef,mTimeRef,oTimeRef,tNameRef,tempRisk){
      const newFormDataTasks = [...formData.tasks]
      const taskDataFromFormData = newFormDataTasks[id]
      console.log(taskDataFromFormData.editing)

      taskDataFromFormData.taskName=tNameRef.current.value
      taskDataFromFormData.optTime=oTimeRef.current.value
      taskDataFromFormData.pesTime=pTimeRef.current.value
      taskDataFromFormData.maxTime=mTimeRef.current.value
      taskDataFromFormData.risk=tempRisk
      taskDataFromFormData.editing = !taskDataFromFormData.editing

      setFormData({...formData,tasks:newFormDataTasks})
  }

  function editHandlerAddTask(id) {
      const newFormDataTasks = [...formData.tasks]
      const taskDataFromFormData = newFormDataTasks[id]
      taskDataFromFormData.risk.push("")
      setFormData({...formData,tasks:newFormDataTasks})
  }

  function editHandlerDeleteRisk(taskId,id) {
      const newFormDataTasks = [...formData.tasks]
      const taskDataFromFormData = newFormDataTasks[taskId]
      console.log(taskId,taskDataFromFormData);
      taskDataFromFormData.risk.splice(id, 1) // deleting the specified risk
      setFormData({...formData,tasks:newFormDataTasks})
  }

  const inputFieldChangeHandler=(index, event) => {
      const riskValues = [...risks]
      riskValues[index] = event.target.value
      setRisks(riskValues)
      console.log(event.target.name,' ', index, ' ', risks)
  }

  const setEmptyRisk= ()=>{setRisks([""])}
  const addEmptyRisk= (taskId,id)=>{
      const newFormDataTasks = [...formData.tasks]
      newFormDataTasks[taskId].risk.push("")
      setFormData({...formData,tasks:newFormDataTasks})
  }
  
  return (
    <div className='formContent'>
        <Button color='primary' onClick={addTaskConfirmation} style={{width:"15%"}}>Add a task</Button>
        <br />
        <br />
        {/* conditional rendering */}
        {formData.tasks.length === 0?
            // <p>Not Here</p>
            <Empty 
            // style={{margin:"0 auto"}}
            />
            :
            <Table
            bordered
            hover
            responsive
            >
                <thead>
                    <tr>
                        <th>
                            Task Name
                        </th>
                        <th>
                            Time 
                            <br/>
                            to
                        </th>
                        <th>
                            Est. 
                            <br/>
                            tp
                        </th>
                        <th>
                            (Month) 
                            <br/>
                            tm
                        </th>
                        <th>
                            Risks
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* conditional rendering of the  */}
                    {formData.tasks.map((task,id) => {
                        return <ProjectTasks key={id} index={id} tasks={task} toggleEditTask={toggleEditTask} 
                        addRiskHandler={addRiskHandler} deleteRiskHandler={deleteRiskHandler} 
                        inputFieldChangeHandler={inputFieldChangeHandler} toggleDeleteTask={deleteTaskHandler} 
                        toggleSaveEdit={toggleSaveEdit} editHandlerAddTask={editHandlerAddTask} 
                        editHandlerDeleteRisk={editHandlerDeleteRisk} setEmptyRisk={setEmptyRisk} 
                        addEmptyRisk={addEmptyRisk} 
                        // temporaryRisk={temporaryRisk} 
                        />
                    })}
                </tbody>
            </Table>
            
            
        }
        

        {/* modal for adding task to the project */}
        <Modal
        centered
        scrollable
        isOpen={addTask}
        >
            <ModalHeader>
                Add Task
            </ModalHeader>
            <ModalBody>
              <Formik
                initialValues={{projectTitle: '', projectDescription: ''}}
                validationSchema={projectTaskFormValidation}
              >
                {formik=>
                  (
                    <Form inline>
                      

                      <Label 
                      size="lg"
                      for="taskName"
                      >
                          Task Name
                      </Label>
                      <Input 
                      id='taskName'
                      bsSize="lg"
                      innerRef={tNameRef} 
                      type="text" 
                      // defaultValue={} 
                      placeholder='Task name' /> 
                      <Label 
                      size="lg"
                      for="optimisticTime"
                      >
                          Optimistic Time
                      </Label>
                      <Input 
                      id='optimisticTime'
                      bsSize="lg"
                      // onKeyDown={} 
                      innerRef={oTimeRef} 
                      type="number" 
                      min={0}
                      // defaultValue={0} 
                      placeholder='Optimistic Time' 
                      /> 
                      <Label 
                      size="lg"
                      for="pessimisticTime"
                      >
                          Pessimistic Time
                      </Label>
                      <Input 
                      id='pessimisticTime'
                      bsSize="lg"
                      // onKeyDown={} 
                      innerRef={pTimeRef} 
                      type="number" 
                      min={0}
                      // defaultValue={0} 
                      placeholder='Pessimistic Time' /> 
                      <Label 
                      size="lg"
                      for="maximumTime"
                      >
                          Maximum Time
                      </Label>
                      <Input 
                      id='maximumTime'
                      bsSize="lg"
                      // onKeyDown={} 
                      innerRef={mTimeRef} 
                      type="number"
                      min={0}
                      // defaultValue={0} 
                      placeholder='Maximum Time' /> 
                      <Label 
                      size="lg"
                      for="risks"
                      >
                          Risk(s)
                      </Label>

                      {risks.length===0 &&
                      <Button
                      onClick={setEmptyRisk}
                      color="primary"
                      // ={risks.length===1}
                      >
                          Add Risk
                      </Button>
                      }

                      {risks.map(
                          (risk,index)=>{ 
                              return <div key={index}
                              style={{
                                  display:"flex",
                                  flexFlow:"row nowrap",
                                  marginBottom:"20px"
                                  // justifyContent:"space-between"
                              }}
                              >
                                  <Input 
                                  id='risks'
                                  bsSize="lg"
                                  value={risk}

                                  onChange={event => inputFieldChangeHandler(index, event)}
                                  
                                  // innerRef={(riskInput) =>{ rNameRef.current[index]=riskInput;
                                  //     console.log(riskInput);}
                                  //  } 
                                  //  onKeyUp={console.log(riskInput)}
                                  type="text"
                                  
                                  placeholder='Risk' /> 
                                  <Button 
                                  color="danger"
                                  onClick={deleteRiskHandler}
                                  style={{
                                      width:"15%",
                                      borderRadius:"50%",
                                      marginLeft:"10px"
                                  }}
                                  // disabled={risks.length===1}
                                  >
                                      -
                                  </Button>
                                  <Button 
                                  color="primary"
                                  onClick={addRiskHandler}
                                  style={{
                                      width:"15%",
                                      borderRadius:"50%",
                                      marginLeft:"10px"
                                  }}
                                  >
                                      +
                                  </Button>
                              </div>
                          }
                      )}
                    </Form>
                  )
                }     
              </Formik>
            </ModalBody>
            <ModalFooter>
                <Button
                color="primary"
                onClick={addTaskHandler}
                >
                    Add Task
                </Button>
                {' '}
                <Button 
                color="danger" 
                onClick={addTaskConfirmation}
                >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </div>
  )
}
