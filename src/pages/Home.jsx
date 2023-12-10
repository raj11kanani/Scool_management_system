import React, { useState } from 'react'

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    class:"",
    section:"",
    rollno:"",
    email: "",

  });  
  const [tableData, setTableData] = useState([]);
  const [editClick,setEditClick] = useState(false);
  const [editIndex,setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
        ...inputs,
        [e.target.name]:e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editClick)
    {
        const temptabledata= tableData;
        Object.assign(temptabledata[editIndex],inputs);
        setTableData([...temptabledata]);
        setEditClick(false);
        setInputs({
            name: "",
            class:"",
            section:"",
            rollno:"",
            email: "",
        })
    }else{
        setTableData([...tableData,inputs]);
        setInputs({
            name: "",
            class:"",
            section:"",
            rollno:"",
            email: "",
        })
    }
  }
  const handleDelete =(index)=>{
    const filterData = tableData.filter((item,i)=> i !==index);
    setTableData(filterData);
  }
  const handleEdit = (index) =>{
    const tempData = tableData[index];
    setInputs({
        name:tempData.name,
        class:tempData.class,
        section:tempData.section,
        rollno:tempData.rollno,
        email: tempData.email,
    });
    setEditClick(true);
    setEditIndex(index);
  }
  
//   console.log("tableData",tableData);
  return (
    <div >
        <h1 className="d-flex justify-content-center">CRUD OPERATIONS</h1>
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} >
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" 
                            name='name'
                            value={inputs.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Class</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control"
                            name='class'
                            value={inputs.class}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Section</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" 
                            name='section'
                            value={inputs.section}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Roll No</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control"
                            name='rollno'
                            value={inputs.rollno}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3"
                            name='email'
                            value={inputs.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary mb-4">
                    {editClick?"update":"Add"}
                </button>
            </form>
        </div>
        <div >
            <div>
                <div class='col'></div>
            </div>
            <div>
                <div class='col'>

                    <table class="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Class</th>
                                <th scope="col">Section</th>
                                <th scope="col">Roll No</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((item,i)=>(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.class}</td>
                                        <td>{item.section}</td>
                                        <td>{item.rollno}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button onClick={()=>handleEdit(i)} type="button" class="btn btn-warning ml-4 mr-4">Edit</button>
                                            <button onClick={()=>handleDelete(i)} type="button" class="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div class='col'></div>
            </div>
        </div>
    </div>
  )
}

export default Home