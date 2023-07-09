import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";

export default function FormPage() {
  const dataKosong = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const [data, setData] = useState(dataKosong);
  const [errMsg, setErrMsg] = useState(baseError);
  const regex = /^[A-Za-z ]*$/;
  const suratKesungguhan = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    let error = { ...errMsg };

    if (name === "nama") {
      if (regex.test(value)) {
        error.nama = "";
      } else {
        error.nama = "Nama Lengkap harus berupa huruf !";
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
      alert("Data Pendaftar tidak sesuai");
    } else if (data.noHandphone.length < 9 || data.noHandphone.length > 14) {
      alert("Panjang nomor handphone harus antara 9 hingga 14 karakter.");
    } else {
      alert(`Data Pendaftar ${data.nama} Berhasil Diterima`);
    }
    resetData();
  };

  const resetData = () => {
    setData(dataKosong);
    setErrMsg(baseError);
  };

  return (
    <div className="container d-flex flex-column align-items-center py-5">
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
        Pendaftaran Peserta Coding Bootcamp
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <label>
            Nama Lengkap :
            <input
              type="text"
              name="nama"
              className="form-control"
              style={{ minWidth: "900px" }}
              value={data.nama}
              required
              onChange={handleInput}
            />
          </label>
        </div>
        <div className="form-group mt-4">
          <label>
            Email :
            <input
              type="email"
              name="email"
              className="form-control"
              required
              style={{ minWidth: "900px" }}
              value={data.email}
              onChange={handleInput}
            />
          </label>
        </div>
        <div className="form-group mt-4">
          <label>
            No. Handphone :
            <input
              type="number"
              minLength={9}
              maxLength={14}
              required
              name="noHandphone"
              className="form-control"
              style={{ minWidth: "900px" }}
              value={data.noHandphone}
              onChange={handleInput}
            />
          </label>
        </div>
        <div className="form-group mt-4">
          <label>Latar Belakang Pendidikan :</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pendidikan"
              id="it"
              value={data.pendidikan}
              required
            />
            <label className="form-check-label">IT</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pendidikan"
              id="nonIt"
              value={data.pendidikan}
            />
            <label className="form-check-label">Non IT</label>
          </div>
        </div>
        <div className="form-group mt-4">
          <label>Kelas Coding yang Dipilih :</label>
          <Form.Select aria-label="Default select example" required>
            <option>Pilih Salah Satu Program...</option>
            <option value="1">Coding Backend with Golang </option>
            <option value="2">Coding Frontend with React</option>
            <option value="3">Fullstack Developer</option>
          </Form.Select>
        </div>
        <div className="form-group mt-4">
          <label>
            Foto Surat Kesungguhan :
            <input
              type="file"
              required
              ref={suratKesungguhan}
              className="form-control"
              style={{ minWidth: "900px" }}
            />
          </label>
        </div>
        <div className="form-group mt-4">
          <label>
            Harapan Untuk Coding Bootcamp Ini :
            <textarea
              name="harapan"
              rows="3"
              className="form-control"
              style={{ minWidth: "900px" }}
              value={data.harapan}
              onChange={handleInput}
            />
          </label>
        </div>

        <span style={{ color: "red" }}>{errMsg.nama}</span>
        {errMsg.noHandphone && (
          <span style={{ color: "red" }}>{errMsg.noHandphone}</span>
        )}
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
    </div>
  );
}
