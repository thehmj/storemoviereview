import { useEffect, useState } from "react";
function List(params) {
  const [data, SetData] = useState();
  useEffect(() => {
    
      SetData(JSON.parse(localStorage.getItem('films')));
  
  },[data])

  return (
    <div className="list">
      <table id="ma">
        <tr>
          <th>MOVIES</th>
          <th>GENRE</th>
          <th>REVIEW</th>
        </tr>
        {data?.map(({ Movie = '', Review = '', Genre = '' }) => {
          return (
            <tr>
              <td>{Movie}</td>
              <td>{Genre}</td>
              <td>{Review}</td>
            </tr>
          )
        })
        }
      </table>
    </div>
  );
}
export default List;