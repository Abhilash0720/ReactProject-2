import React from 'react'

export const ProjectContext = React.createContext(null)
function UserContext({children}) {
  let content = [
    {
    header:"FeedBacks"
    },
    {
      header:"Weekly Task"
    },
    {
      header:"Lyrics"
    }
]
let days = [
  {
  header:"5 days ago"
  },
  {
    header:"2 wekks ago"
  },
  {
    header:"3 weeks ago"
  }
]
  return <ProjectContext.Provider value={{content,days}}> 
    {children}
  </ProjectContext.Provider>
}

export default UserContext