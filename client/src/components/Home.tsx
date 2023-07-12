import { useState } from 'react'
import Loading from './Loading'

export default function Home() {
  const [fullName, setFullName] = useState('')
  const [currentPosition, setCurrentPosition] = useState('')
  const [currentLength, setCurrentLength] = useState(1)
  const [currentTechnologies, setCurrentTechnologies] = useState('')
  const [companyInfo, setCompanyInfo] = useState([{ name: '', position: '' }])
  const [headshot, setHeadshot] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  function handleFormSubmit(e: any) {
    e.preventDefault()
    console.log({
      fullName,
      currentPosition,
      currentLength,
      currentTechnologies,
      headshot,
    })
    setLoading(true)
  }

  function handleAddCompany() {
    setCompanyInfo([...companyInfo, { name: '', position: '' }])
  }

  function handleRemoveCompany(index: number) {
    const list = [...companyInfo]
    list.splice(index, 1)
    setCompanyInfo(list)
  }

  function handleUpdateCompany(e: any, index: number) {
    const { name, value }: { name: string; value: any } = e.target
    const list = [...companyInfo]
    list[index][name] = value
    setCompanyInfo(list)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="app">
      <h1>Resume Builder</h1>
      <p>Generate a resume with ChatGPT in a few seconds</p>

      <form
        onSubmit={handleFormSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <label htmlFor="fullName">Enter your full name</label>
        <input
          type="text"
          required
          name="fullName"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <div className="nestedContainer">
          <div>
            <label htmlFor="currentPosition">Current Position</label>
            <input
              type="text"
              required
              name="currentPosition"
              className="currentInput"
              value={currentPosition}
              onChange={(e) => setCurrentPosition(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="currentLength">For how long? (years)</label>
            <input
              type="number"
              required
              name="currentLength"
              className="currentInput"
              value={currentLength}
              onChange={(e) => setCurrentLength(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="currentTechnologies">Technologies used</label>
            <input
              type="text"
              required
              name="currentTechnologies"
              className="currentInput"
              value={currentTechnologies}
              onChange={(e) => setCurrentTechnologies(e.target.value)}
            />
          </div>
        </div>
        <h3>Companies you've worked at</h3>
        {companyInfo.map((company, index) => (
          <div className="nestedContainer" key={index}>
            <div className="companies">
              <label htmlFor="name">Company Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={(e) => handleUpdateCompany(e, index)}
              />
            </div>
            <div className="companies">
              <label htmlFor="position">Position Held</label>
              <input
                type="text"
                name="postion"
                required
                onChange={(e) => handleUpdateCompany(e, index)}
              />
            </div>
            <div className="btn__group">
              {companyInfo.length - 1 === index && companyInfo.length < 4 && (
                <button id="addBtn" onClick={handleAddCompany}>
                  Add
                </button>
              )}
              {companyInfo.length > 1 && (
                <button
                  id="deleteBtn"
                  onClick={() => handleRemoveCompany(index)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
        {/* <label htmlFor="photo">Upload your headshot</label>
        <input
          type="file"
          name="photo"
          required
          id="photo"
          accept="image/x-png,image/jpeg"
          onChange={(e) => setHeadshot(e.target.files?.[0])}
        /> */}
        <button>CREATE RESUME</button>
      </form>
    </div>
  )
}
