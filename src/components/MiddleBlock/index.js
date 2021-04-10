// import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

import SvgIcon from "../../common/SvgIcon";

// const Button = lazy(() => import("../../common/Button"));

const MiddleBlock = ({ title,content,section, t }) => {
  // const scrollTo = (id) => {
  //   const element = document.getElementById(id);
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={35} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={1}>
                          <SvgIcon src={item.icon} width="180px" height="180px" />
                        {/* <S.MinTitle>{t(item.title)}</S.MinTitle> */}
                          {/* <S.MinPara>{t(item.content)}</S.MinPara> */}
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
