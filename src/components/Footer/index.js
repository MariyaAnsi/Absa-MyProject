import { lazy, Fragment } from "react";
import { Row} from "antd";
// import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {


  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="35px" height="35px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
     
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://www.facebook.com/QuiltAI"
                  src="facebook.png"
                />
                <SocialLink
                  href="https://twitter.com/AiQuilt"
                  src="twitter.png"
                />
                <SocialLink
                  href="https://www.linkedin.com/company/quiltdotai/"
                  src="linkedin.png"
                />
                <SocialLink
                  href="https://www.instagram.com/quilt.ai/"
                  src="Instagram.png"
                />
                <SocialLink
                  href="https://www.youtube.com/channel/UCbX-PyWnTbeieIsmdc7Wxvw"
                  src="Youtube.png"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
