import { ReactElement } from "react";
import styled from "styled-components";

type PageLayoutPropTypes = {
  hideSideBar?: boolean;
  children?: ReactElement | ReactElement[];
};

const PageMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(243, 246, 249, 0.6);
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  overflow: auto;
  padding: 20px;
`;

function Layout({ children }: PageLayoutPropTypes) {
  return (
    <PageMain>
      <Content>{children}</Content>
    </PageMain>
  );
}

export default Layout;
