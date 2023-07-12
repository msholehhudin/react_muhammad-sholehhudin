import { useEffect, useState } from "react";
import { fetchAPI } from "../helper/hooks";
import axios from "axios";

export default function FormPage() {
  const dataKosong = {
    id: "",
    name: "",
    price: "",
    desc: "",
    createdAt: "",
  };

  const baseError = {
    name: "",
    price: "",
  };

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(dataKosong);
  const [errMsg, setErrMsg] = useState(baseError);
  const regex = /^[A-Za-z ]*$/;

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, "=>", value);
    let error = { ...errMsg };
    if (name === "productName") {
      if (regex.test(value)) {
        error.name = "";
      } else {
        error.name = "Nama Product harus berupa huruf !";
      }
    }
    setErrMsg(error);
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errMsg).some((error) => error !== "")) {
      alert("Data Product tidak sesuai");
    } else {
      alert(`Data Product ${data.name} Berhasil Diterima`);
    }
    resetData();
  };

  const resetData = () => {
    setData(dataKosong);
    setErrMsg(baseError);
  };

  async function fetchProducts() {
    try {
      // const data = await fetchAPI("product");
      const { data } = await axios({
        method: "get",
        baseURL: "https://64ae9770c85640541d4d56fc.mockapi.io/product", //`${process.env.REACT_APP_ENDPOINT}`,
      });

      if (data) {
        setProducts(data);
        return data.result;
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="container d-flex flex-column align-items-center py-2">
      <h1
        className="mt-3"
        style={{
          background: "linear-gradient(to right, #00C4FF, #FFE79B, #DD58D6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "50px",
          fontWeight: "bold",
          padding: "10px",
        }}
      >
        Product Management
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <label>
            Product Name :
            <input
              type="text"
              name="name"
              className="form-control"
              style={{ minWidth: "900px" }}
              value={data.name}
              required
              onChange={handleInput}
            />
          </label>
        </div>
        <div className="form-group mt-4">
          <label>
            Product Price :
            <input
              type="number"
              name="price"
              className="form-control"
              required
              style={{ minWidth: "900px" }}
              value={data.price}
              onChange={handleInput}
            />
          </label>
        </div>

        <div className="form-group mt-4">
          <label>
            Product Description :
            <textarea
              name="desc"
              rows="3"
              className="form-control"
              style={{ minWidth: "900px" }}
              value={data.desc}
              onChange={handleInput}
            />
          </label>
        </div>

        {errMsg.name && <span style={{ color: "red" }}>{errMsg.name}</span>}
        {errMsg.price && <span style={{ color: "red" }}>{errMsg.price}</span>}
        <div className="d-flex gap-2 mt-2">
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
          <button
            type="button"
            onClick={resetData}
            className="btn btn-danger mt-3"
          >
            Reset
          </button>
        </div>
      </form>

      <div
        className="d-flex flex-column align-items-center gap-4 py-4"
        style={{ height: 500, overflow: "auto" }}
      >
        {products.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#f6f6f6",
              borderRadius: 8,
              boxShadow: "1px 2px 3px rgba(0,0,0,.3)",
              maxWidth: 520,
              width: "100%",
            }}
            className="p-4"
          >
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <p>{item.description}</p>

            <div className="d-flex gap-2">
              <button className="btn btn-success">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
