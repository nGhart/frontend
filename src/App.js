import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    getAnimals();
  }, []);
  const getAnimals = async () => {
    const response = await axios.get('http://localhost:1994/animals');
    console.log(response);
    setAnimals(response.data.animals);
    console.log(response);
  };
  return (
    <div className="App">
      {animals &&
        animals.map((item) => {
          return (
            <>
              <table>
                <th>
                  <td>ID</td>
                  <td>BREED</td>
                  <td>SEX</td>
                  <td>BRED</td>
                  <td>DOB</td>
                  <td>AGE</td>
                  <td>WEANED</td>
                  <td>WEIGHT</td>
                </th>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.breed}</td>
                  <td>{item.sex}</td>
                  <td>{item.bred}</td>
                  <td>{item.dob}</td>
                  <td>Calc</td>
                  <td>{item.weaning}</td>
                  <td>{item.weightCurrent}</td>
                </tr>
              </table>
            </>
          );
        })}
    </div>
  );
}

export default App;
