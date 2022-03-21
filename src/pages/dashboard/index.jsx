import React, { useState, useEffect } from 'react'
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Table
} from 'reactstrap'
import FormDashboard from './form'
import { GrAddCircle } from 'react-icons/gr'
import axios from "axios"
import './styles.scss'
import NavbarDash from '../../component/sidebar/navbarDashboard/navbarDash'


export default function Dashboard() {
    const [header, setHeader] = useState([])
    const [data, setData] = useState([])
    const [action, setAction] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [updatedId, setUpdatedId] = useState(null)

    const thousandSeparator = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

    const handleCreate = () => {
        setAction('Create');
        setModalVisible(true)
    }

    const handleEdit = (id) => {
        setUpdatedId(id);
        setAction('Edit');
        setModalVisible(true)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/products/${id}`)
            .then(() => {
                const updateData = data.filter(v => v.id !== id)
                setData(updateData)
            })
            .catch((err) => console.log(err))

    }

    const getData = async () => {
        await axios.get('http://localhost:8080/products')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err))
    }

    // const handleLogout = () => {
    //     localStorage.removeItem('access_token')
    //     window.location = '/'
    // }

    useEffect(() => {
        const listHeader = ['No', 'Name', 'Price', 'Stock', 'Category', 'Action']
        setHeader(listHeader)
        getData()
    }, [])

    console.log({ data, header })
    return (
        <>
            <NavbarDash />
            <div className='dashboard-menu' style={{ marginLeft: "9%", marginRight: "10%", marginTop: "2%" }}>
                {/* <Button color="danger" onClick={() => handleLogout()}>Log Out</Button> */}
                <Table>
                    <thead>
                        <tr>
                            {header.map((v, idx) => (
                                <th key={idx}> {v}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((v, idx) => (
                            <tr key={idx}>
                                <th scope='row'>
                                    {idx + 1}
                                </th>
                                <td>
                                    {v.name}
                                </td>
                                <td>Rp {thousandSeparator(`${v.price}`)}</td>
                                <td> {v.stock} </td>
                                <td> {v.category} </td>
                                <td>
                                    <Button className='btn-delete' color='danger' onClick={() => handleDelete(v.id)}> Delete</Button>
                                    <Button className='btn-edit' color='success'onClick={() => handleEdit(v.id)}> Edit</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


                <Modal isOpen={modalVisible} toggle={() => setModalVisible(!modalVisible)}>
                    <ModalHeader>{`Form ${action} Data`}</ModalHeader>
                    <ModalBody>
                        <FormDashboard
                            actionForm={action}
                            data={data}
                            setData={setData}
                            setModalVisible={setModalVisible}
                            updatedId={updatedId}
                        />
                    </ModalBody>
                </Modal>
                <div className='btn-add'>
                    <Button size="lg" color='primary' onClick={() => handleCreate()}><GrAddCircle size="20px" /></Button>
                </div>
            </div>
        </>
    )
}