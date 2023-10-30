import React from 'react'

export default function Dashboard() {
    const cards={
      border:'1px solid lightblue',
      height:'130px',
      width:'200px',
      borderRadius:'10px',
      backgroundColor:'lightblue'
      ,margin:'12px'
    }
    const cards1 ={
      border:'1px solid lightgreen',
      height:'130px',
      width:'200px',
      borderRadius:'10px',
      backgroundColor:'lightgreen'
      ,margin:'12px'
      
    }
    const cards2={
      border:'1px solid pink',
      height:'130px',
      width:'200px',
      borderRadius:'10px',
      backgroundColor:'pink'
      ,margin:'12px'
      
    }
    const cards3={
      border:'1px solid lightyellow',
      height:'130px',
      width:'200px',
      borderRadius:'10px',
      backgroundColor:'lightyellow',
      margin:'12px'

    }
    const dashboard={
      display: 'flex',
      margin:'12px'

    }

  return (
    <div >
      <div style={dashboard} className="dashboard">
      <div className="card" style={cards}>

      </div>
      <div className="card" style={cards1}>

      </div>
      <div className="card" style={cards2}>

      </div>
      <div className="card" style={cards3}>

      </div>
      </div>
    </div>
  )
}
