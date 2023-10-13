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
  return <ProjectContext.Provider value={{content}}> 
    {children}
  </ProjectContext.Provider>
}

export default UserContext