import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "@/app/_components/atoms/Card";

let component: Document | Node | Element | Window;

describe("Card", () => {
  it("should be able to render the children properly", () => {
    render(<Card>test</Card>);
    component = screen.getByText("test");
    expect(component).toBeInTheDocument();
  });
});
