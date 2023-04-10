import { useEffect, useState } from "react";
function List(params) {
  const [data, SetData] = useState();
  useEffect(() => {
    const startdata =()=>{
      SetData(JSON.parse(localStorage.getItem('films')));
    }

    startdata();
  
  },[])

  const refresh=()=>{
    SetData(JSON.parse(localStorage.getItem('films')));
  }
  return (
    <div className="list">
      <button onClick={()=>refresh()}>Refresh</button>
      <table id="ma">
        <tbody>
        <tr>
          <th>MOVIES</th>
          <th>GENRE</th>
          <th>REVIEW</th>
        </tr>
        {data?.map(({ Movie = '', Review = '', Genre = '' }) => {
          return (
            <tr key={Movie}>
              <td>{Movie}</td>
              <td>{Genre}</td>
              <td>{Review}</td>
            </tr>
          )
        })
        }
        </tbody>
      </table>
    </div>
  );
}
export default List;