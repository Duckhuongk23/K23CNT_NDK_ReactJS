import React from 'react'
import axios from 'axios'

export default function ndkreadapilocal() {
    // khởi tạo state
    const [ndklistUser, setNdklistUser] = useState([])
    // Đọc dữ liệu từ API local và set cho ndklistUser
    const apiUrl = 'http://localhost:3001/users'
    // lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((ndkResponse)=>{
                setNdklistUser(ndkResponse.data)
            })
            .catch((error)=>{
                console.log("lỗi");
            })
    },[])
  return (
    <div>
        <h2>Đọc dữ liệu từ API local</h2>
        <table classname='table table-borbered'>
            <thead>
                <tr>
                    <th>Fullname</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {
                    ndkListUser
                }
            </tbody>
        </table>
    </div>
  )
}

