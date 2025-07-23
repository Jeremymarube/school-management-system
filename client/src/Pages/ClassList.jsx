import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config' // Import the base API URL

function ClassList() {
  const [classes, setClasses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${BASE_URL}/classes`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch classes')
        return res.json()
      })
      .then(data => setClasses(data))
      .catch(err => console.error(err))
  }, [])

  const handleDelete = async (id) => {
    try {
      await fetch(`${BASE_URL}/classes/${id}`, {
        method: 'DELETE'
      })
      setClasses(classes.filter(cls => cls.id !== id))
    } catch (err) {
      console.error('Failed to delete class:', err)
    }
  }

  const filteredClasses = classes.filter(cls =>
    `${cls.name} ${cls.teacher}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ padding: '20px' }}>
      <h2>Classes</h2>

      <input
        type="text"
        placeholder="Search classes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
      />

      <button onClick={() => navigate('/classes/new')}>Add Class</button>

      <ul>
        {filteredClasses.map(cls => (
          <li key={cls.id} style={{ margin: '10px 0' }}>
            {cls.name} - {cls.teacher}
            <button onClick={() => navigate(`/classes/${cls.id}`)}>Edit</button>
            <button onClick={() => handleDelete(cls.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClassList
