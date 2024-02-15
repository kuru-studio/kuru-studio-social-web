import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Visibility from "@/app/_components/atoms/Visibility";

let component: Document | Node | Element | Window | null;

describe("Visibility", () => {
  it("should be able to render the children when state is TRUE ", () => {
    render(<Visibility state={true}>test</Visibility>);
    component = screen.getByText("test");
    expect(component).toBeInTheDocument();
  });
  it("should NOT be able to render the children when state is FALSE ", () => {
    render(<Visibility state={false}>test</Visibility>);
    component = screen.queryByText("test");
    expect(component).toBeNull;
  });
});
