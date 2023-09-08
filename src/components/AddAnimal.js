import React from 'react';
import Form from 'react-bootstrap/Form';
import animalStore from '../stores/store';

const AddAnimal = () => {
  const store = animalStore();
  return (
    <div>
      {!store.updateForm._id && (
        <section>
          <h1>Add Animal</h1>
          <Form
            onSubmit={store.handleAddAnimal}
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            <fieldset>
              <Form.Group>
                <label htmlFor="">ID</label>
                <input
                  name="name"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.name}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group>
                <label htmlFor="">SEX</label>
                <input
                  name="sex"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.sex}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group>
                <label htmlFor="">BREED</label>
                <input
                  name="breed"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.breed}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              {' '}
              <Form.Group>
                <label htmlFor="">DOB</label>
                <input
                  name="dob"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.dob}
                  type="date"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group>
                <h3>Animal bred on Farm</h3>
                <Form.Check
                  inline
                  label="Bred on Farm"
                  name="bred"
                  type="radio"
                  id="bred"
                  onChange={store.updateCreateAnimals}
                  value="true"
                  checked={store.createAnimal.bred === 'Bred on Farm'}
                />
                <Form.Check
                  inline
                  label="Purchased"
                  name="bred"
                  type="radio"
                  id="purchased"
                  value="false"
                  checked={store.createAnimal.bred === 'Purchased'}
                  onChange={store.updateCreateAnimals}
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <h3>PARENTS</h3>
              <Form.Group>
                <label htmlFor="">Dame</label>
                <input
                  name="dame"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.dame}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Sire</label>
                <input
                  name="sire"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.sire}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Granddame</label>
                <input
                  name="grandDame"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.grandDame}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Grandsire</label>
                <input
                  name="grandSire"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.grandSire}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <label htmlFor="">WEANED AT</label>
              <input
                name="weaning"
                onChange={store.updateCreateAnimals}
                value={store.createAnimal.weaning}
                type="number"
              />
            </fieldset>
            <fieldset>
              <h3>WEIGHT</h3>
              <Form.Group>
                <label htmlFor="">At Birth</label>
                <input
                  name="weightBirth"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.weightBirth}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">At Weaning</label>
                <input
                  name="weightWean"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.weightWean}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">At 8 Weeks</label>
                <input
                  name="weight8"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.weight8}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Current</label>
                <input
                  name="weightCurrent"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.weightCurrent}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Sale</label>
                <input
                  name="weightSale"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.weightSale}
                  type="number"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <h3>FERTILITY</h3>
              <Form.Group>
                <label htmlFor="">Age at First Service</label>
                <input
                  name="firstService"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.firstService}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number of Services</label>
                <input
                  name="totalService"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.totalService}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number of Litters</label>
                <input
                  name="totalLitters"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.totalLitters}
                  type="number"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <h3>LITTER</h3>
              <Form.Group>
                <label htmlFor="">Number of Kits</label>
                <input
                  name="totalKits"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.totalKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number of Kits Alive</label>
                <input
                  name="aliveKits"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.aliveKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number of Kits Dead</label>
                <input
                  name="deadKits"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.deadKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number Sold</label>
                <input
                  name="soldKits"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.soldKits}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number Butchered</label>
                <input
                  name="butcheredKits"
                  onChange={store.updateCreateAnimals}
                  value={store.createAnimal.butcheredKits}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <button type="submit">Add</button>
          </Form>
        </section>
      )}
    </div>
  );
};

export default AddAnimal;