import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";

import { Icon, IconProps } from ".";

describe("Icon", () => {
  let getIconEl: any;

  beforeAll(() => {
    getIconEl = (props: IconProps) => (
      <Icon
        name="some-name"
        svgSpritePath="some-path"
        className="some-class-name"
        data-testid="icon"
        {...props}
      />
    );
  });

  afterEach(cleanup);

  it("renders correctly by default", () => {
    const { container } = render(getIconEl());

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with all props", () => {
    const { container } = render(getIconEl({ onClick: () => {} }));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("handles click on Icon correctly", () => {
    const onClick = jest.fn();

    const { getByTestId } = render(getIconEl({ onClick }));

    fireEvent.click(getByTestId("icon"));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][0].currentTarget).toBeDefined();
  });
});
