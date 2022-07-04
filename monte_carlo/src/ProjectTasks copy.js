import React, { useRef, useState } from 'react'
import Risks from "./Risks copy"
import { Label, Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function ProjectTasks({ index, tasks, toggleEditTask, toggleDeleteTask, toggleSaveEdit }) {
    
    const [wantsToDelete,setwantsToDelete] = useState(false);
    

    const tNameRef= useRef()
    const oTimeRef= useRef()
    const pTimeRef= useRef()
    const mTimeRef= useRef()
    const rNameRef= useRef()

    const projectRisks = tasks.risk
    const [tempRisks,setTempRisks]=useState([])

    function editTask() {
        toggleEditTask(index)
        console.log(tasks.risk);
    }

    function saveEdit() {
        // toggleEditTask(index)
        toggleSaveEdit(index,pTimeRef,mTimeRef,oTimeRef,tNameRef,tempRisks)
    }

    function deleteTask() {
        toggleDeleteTask(index)
        setwantsToDelete(false)
        // if (wantsToDelete) {
            
        // }
    }

    function deleteConfirmation() {
        const del = !wantsToDelete
        setwantsToDelete(del)
    }

    function enterKeyPressSaveEdit() {
        return
    }
    

    const inputFieldChangeHandler=(index, event) => {
        const riskValues = [...tasks.risk]
        riskValues[index] = event.target.value
        setTempRisks(riskValues)
        console.log(event.target.name,' ', index, ' ', riskValues[index])
    }

    

    // // 
    function addRiskHandler() {//id, addedRisk
        tasks.risk.push("")
        // const currentRisk = rNameRef.current.values
        // console.log(currentRisk.length)
        // currentRisk.current[currentRisk.length]="New Risk" //adding a defaul empty value for the new risk to later be set

        // setRisks([...risks,currentRisk])
        // setFormData({...formData,tasks:[{
        //     ...formData.tasks,
        //     risk:[""]
        //   }]})
        
    }
    function deleteRiskHandler(id) {
        
        tasks.risk.splice(id, 1) // deleting the specified risk

        // setFormData({...formData,tasks:[{
        //     ...formData.tasks,
        //     risk:[""]
        //   }]})
        
    }
    
  return (
    <tr>
        <td>
            {tasks.taskName}
        </td>
        <td>
            {tasks.optTime}
        </td>
        <td>
            {tasks.pesTime}
        </td>
        <td>
            {tasks.maxTime}
        </td>
        <td>
            {/* conditional rendering of the  */}
            {projectRisks.map((risks,id) => {
                return <Risks key={id} risk={risks} />
            })}
        </td>
        <td style={{textAlign:"center"}}>
            <span className='projectActions' onClick={editTask} 
            style={{width:'45%',float:'left',color:'#0500FF',textAlign:"right"}}
            >
                Edit
            </span>
            {' '}
            <span className='projectActions' onClick={deleteConfirmation} 
            style={{width:'45%',float:'right',color:'#0500FF',textAlign:"left"}}
            >
                Delete
            </span>
        </td>

         {/* modal for the editing of the list's tasks upon toggle */}
         <Modal
            centered
            scrollable
            isOpen={tasks.editing}
          >
            <ModalHeader>
              Edit To Do List Item
            </ModalHeader>
            <ModalBody>
              {/* <Input onKeyDown={enterKeyPressSaveEdit} 
              innerRef={toDoListGoalRef} 
              type="text" 
              defaultValue={todogoal.name} 
              placeholder='Edit task here' />  */}
              <Label 
                size="lg"
                for="taskName"
                >
                    Task Name
                </Label>
                <Input 
                id='taskName'
                bsSize="lg"
                onKeyDown={enterKeyPressSaveEdit} 
                innerRef={tNameRef} 
                type="text" 
                defaultValue={tasks.taskName}
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
                defaultValue={tasks.optTime}
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
                onKeyDown={enterKeyPressSaveEdit}
                innerRef={pTimeRef} 
                type="number" 
                min={0}
                defaultValue={tasks.pesTime}
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
                onKeyDown={enterKeyPressSaveEdit}
                innerRef={mTimeRef} 
                type="number"
                min={0}
                defaultValue={tasks.maxTime}
                placeholder='Maximum Time' /> 
                <Label 
                size="lg"
                for="risks"
                >
                    Risk(s)
                </Label>
                <InputGroup>
                {/* conditional rendering of the  */}
                {tasks.risk.map(
                    (risk,index)=>{ 
                        console.log(risk);
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
                            // value={risk}
                            defaultValue={risk}

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
                
                </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={saveEdit}
              >
                Save Edit
              </Button>
              {' '}
              <Button color="danger" onClick={editTask}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          {/* modal for the confirmation of the deletion of the list contents */}
            <Modal
            centered
            scrollable
            isOpen={wantsToDelete}
            >
                <ModalHeader>
                    Task Deletion Confirmation
                </ModalHeader>
                <ModalBody>
                    <Button
                    color="danger"
                    onClick={deleteTask}
                    >
                        Delete Task
                    </Button>
                    {' '}
                    <br />
                    <br />
                    <Button 
                    color="secondary" 
                    onClick={deleteConfirmation}
                    >
                        Cancel
                    </Button>
                </ModalBody>
            </Modal>
    </tr>   
  )
}
