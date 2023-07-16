import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NameForm from "./FormCoding";

describe("NameForm", () => {
  test("renders NameForm component", () => {
    render(<NameForm />);
    // screen.debug();

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

    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue(
      "Muhammad Sholehhudin"
    );
  });

  //   test("input Nama Lengkap with Number", () => {});

  //   test("submit button", () => {});
});
