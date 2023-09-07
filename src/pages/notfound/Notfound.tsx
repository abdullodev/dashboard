import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  Styled404Page,
  StyledHeading,
  StyledLink,
  StyledText,
} from "./Notfound.style";

const Notfound = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <Styled404Page>
      <StyledHeading>404</StyledHeading>
      <StyledText>Sahifa topilmadi</StyledText>
      <StyledText>
        Bu sahifadan oldingi sahifaga qaytish
        <StyledLink onClick={back}>
          <ArrowLeftOutlined />
        </StyledLink>
        .
      </StyledText>
    </Styled404Page>
  );
};

export default Notfound;
