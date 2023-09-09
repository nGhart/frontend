import React from 'react';
import animalStore from '../../stores/store';
import Form from 'react-bootstrap/Form';

const EditAnimal = () => {
  const store = animalStore();
  return (
    <div>
      {store.updateForm._id && (
        <section
          style={{
            position: 'fixed',
            top: 0,
            backgroundColor: 'rgb(26, 115, 96)',
            left: 0,
            height: '100%',
            zIndex: 5,
            color: 'black',
            padding: '20px',
          }}
        >
          <h1>Update</h1>
          <Form
            style={{ display: 'flex', flexWrap: 'wrap' }}
            onSubmit={store.updateAnimal}
          >
            <fieldset>
              <Form.Group>
                <label htmlFor="">ID</label>
                <input
                  name="name"
                  onChange={store.handleUpdate}
                  value={store.updateForm.name}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group>
                <label htmlFor="">SEX</label>
                <input
                  name="sex"
                  onChange={store.handleUpdate}
                  value={store.updateForm.sex}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <Form.Group>
                <label htmlFor="">BREED</label>
                <input
                  name="breed"
                  onChange={store.handleUpdate}
                  value={store.updateForm.breed}
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
                  onChange={store.handleUpdate}
                  value={store.updateForm.dob}
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
                  onChange={store.handleUpdate}
                  value="true"
                  checked={store.updateForm.bred === 'true'}
                />
                <Form.Check
                  inline
                  label="Purchased"
                  name="bred"
                  type="radio"
                  id="purchased"
                  value="false"
                  checked={store.updateForm.bred === 'false'}
                  onChange={store.handleUpdate}
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <h3>PARENTS</h3>
              <Form.Group>
                <label htmlFor="">Dame</label>
                <input
                  name="dame"
                  onChange={store.handleUpdate}
                  value={store.updateForm.dame}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Sire</label>
                <input
                  name="sire"
                  onChange={store.handleUpdate}
                  value={store.updateForm.sire}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Granddame</label>
                <input
                  name="grandDame"
                  onChange={store.handleUpdate}
                  value={store.updateForm.grandDame}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Grandsire</label>
                <input
                  name="grandSire"
                  onChange={store.handleUpdate}
                  value={store.updateForm.grandSire}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <fieldset>
              <label htmlFor="">WEANED AT</label>
              <input
                name="weaning"
                onChange={store.handleUpdate}
                value={store.updateForm.weaning}
                type="number"
              />
            </fieldset>
            <fieldset>
              <h3>WEIGHT</h3>
              <Form.Group>
                <label htmlFor="">At Birth</label>
                <input
                  name="weightBirth"
                  onChange={store.handleUpdate}
                  value={store.updateForm.weightBirth}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">At Weaning</label>
                <input
                  name="weightWean"
                  onChange={store.handleUpdate}
                  value={store.updateForm.weightWean}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">At 8 Weeks</label>
                <input
                  name="weight8"
                  onChange={store.handleUpdate}
                  value={store.updateForm.weight8}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Current</label>
                <input
                  name="weightCurrent"
                  onChange={store.handleUpdate}
                  value={store.updateForm.weightCurrent}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Sale</label>
                <input
                  name="weightSale"
                  onChange={store.handleUpdate}
                  value={store.updateForm.weightSale}
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
                  onChange={store.handleUpdate}
                  value={store.updateForm.firstService}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number of Services</label>
                <input
                  name="totalService"
                  onChange={store.handleUpdate}
                  value={store.updateForm.totalService}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number of Litters</label>
                <input
                  name="totalLitters"
                  onChange={store.handleUpdate}
                  value={store.updateForm.totalLitters}
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
                  onChange={store.handleUpdate}
                  value={store.updateForm.totalKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number of Kits Alive</label>
                <input
                  name="aliveKits"
                  onChange={store.handleUpdate}
                  value={store.updateForm.aliveKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number of Kits Dead</label>
                <input
                  name="deadKits"
                  onChange={store.handleUpdate}
                  value={store.updateForm.deadKits}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number Sold</label>
                <input
                  name="soldKits"
                  onChange={store.handleUpdate}
                  value={store.updateForm.soldKits}
                  type="number"
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="">Number Butchered</label>
                <input
                  name="butcheredKits"
                  onChange={store.handleUpdate}
                  value={store.updateForm.butcheredKits}
                  type="text"
                />
              </Form.Group>
            </fieldset>
            <button type="submit">Update</button>
          </Form>
        </section>
      )}
    </div>
  );
};

export default EditAnimal;
