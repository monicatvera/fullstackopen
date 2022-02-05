import axios from "axios";
const baseURL = `http://localhost:3001/persons`;

const getAll = async () => {
  const req = axios.get(baseURL);
  const data = await req;
  console.log(data);
  return data;
};

const create = (obj) => axios.post(baseURL, obj);

const remove = (obj) => axios.delete(`${baseURL}/${obj.id}`);

const update = (obj) => axios.put(`${baseURL}/${obj.id}`, obj);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, remove, update };
