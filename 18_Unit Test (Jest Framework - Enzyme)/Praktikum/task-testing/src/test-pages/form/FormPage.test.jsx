import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NameForm from "./FormCoding";

describe("NameForm", () => {
  test("renders NameForm component", () => {
    render(<NameForm />);

    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
  });

  test("input test for Nama Lengkap and Email", () => {
    render(<NameForm />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Muhammad Sholehhudin" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "sholeh@gmail.com" },
    });

    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue(
      "Muhammad Sholehhudin"
    );
    expect(screen.getByLabelText(/Email/)).toHaveValue("sholeh@gmail.com");
  });

  test("input Nama Lengkap with Number", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Muhammad Sholehhudin12" },
    });

    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue(
      "Muhammad Sholehhudin12"
    );
    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
  });

  //   test("submit button", () => {});
});
