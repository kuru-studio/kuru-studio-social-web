import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@/app/_components/atoms/Button";

const clickMock = jest.fn();
let component: Document | Node | Element | Window;

describe("Button", () => {
  beforeEach(() => {
    render(
      <Button onClick={clickMock} type="primary">
        test
      </Button>
    );
    component = screen.getByText("test");
  });

  it("should be able to render the children properly", () => {
    expect(component).toBeInTheDocument();
  });
  it("should be able to trigger onClick function", () => {
    fireEvent.click(component);
    expect(clickMock).toHaveBeenCalled();
  });
  it("should NOT be able to trigger onClick function when disabled", () => {
    render(
      <Button disabled onClick={clickMock} type="primary">
        test
      </Button>
    );
    expect(clickMock).not.toHaveBeenCalled();
  });
});
