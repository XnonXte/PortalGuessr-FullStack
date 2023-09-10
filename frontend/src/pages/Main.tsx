import AnswerForm from "../components/AnswerForm";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Guessr from "../components/Guessr";
import MainFooter from "../components/MainFooter";

const Main = () => {
  return (
    <>
      <Guessr />
      <AnswerForm />
      <MainFooter />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default Main;
