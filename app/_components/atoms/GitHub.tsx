"use client";

import GitHubButton from "react-github-btn";

const Github: React.FunctionComponent = () => {
  return (
    <GitHubButton
      href="https://github.com/kuru-studio/kuru-studio-social"
      data-color-scheme="no-preference: light; light: light; dark: light;"
      data-size="large"
      data-show-count="true"
      aria-label="Star kuru-studio/kuru-studio-social on GitHub"
    >
      Star
    </GitHubButton>
  );
};

export default Github;
