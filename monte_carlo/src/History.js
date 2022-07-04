import React from 'react'
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap'; // reactstrap module imports { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectHistory from './ProjectHistory';

export default function History({ userProfile }) {
  return (
    <div className='outlet_Container'>
        <h2>History</h2>
        <Table
        bordered
        hover
        responsive
        >
            <thead>
                <tr>
                    <th>
                        Project Title
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Operation
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* conditional rendering of the  */}
                {/* {savedProjects.map(projects => {
                    return <ProjectHistory projects={projects} />
                })} */}
            </tbody>
            
        </Table>

        {/* <Pagination>
            <PaginationItem>
                <PaginationLink
                first
                href="#"
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                href="#"
                previous
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                5
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                href="#"
                next
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                href="#"
                last
                />
            </PaginationItem>
        </Pagination> */}

    </div>
  )
}
