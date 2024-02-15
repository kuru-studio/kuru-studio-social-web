import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "@/app/_components/atoms/Logo";

let component: Document | Node | Element | Window;

describe("Logo", () => {
  it("should be able to be rendered ", () => {
    render(<Logo width={100} height={100}></Logo>);
    component = screen.getByAltText("Kuru Studio Social");
    expect(component).toBeInTheDocument();
  });
});
