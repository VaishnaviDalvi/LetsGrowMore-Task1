import { useState } from "react/cjs/react.development";
import "./App.css";
import List from "./components/list/List";
import Title from "./components/title/Title";

function App() {
  const [data, setData] = useState([
    {
      title: "hit the gym",
    },
    {
      title: "hit the floor",
    },
  ]);
  const handleSubmit = (value) => {
    setData([
      ...data,
      {
        title: value,
      },
    ]);
  };
  const deleteData = (del) => {
    let id = data
      .map((e) => {
        return e.title;
      })
      .indexOf(del);
    let tempData = data;
    tempData.splice(id, 1);
    setData([...tempData]);
  };
  return (
    <div className="app_wrapper">
      <div className="app_box">
        {/* title box */}
        <Title handelsubmit={handleSubmit} />
        {/* list */}
        {data.map((item) => {
          return <List title={item.title} deleteData={deleteData} />;
        })}
      </div>
    </div>
  );
}

export default App;
