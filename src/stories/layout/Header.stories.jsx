import { Header } from "../../components/layout/Header";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Layout/Header",
  component: Header,
};

const Template = ({ args }) => {
  return (
    <MemoryRouter>
      <div className="h-[400px] bg-p2">
        <Header />
      </div>
    </MemoryRouter>
  );
};

export const HeaderStory = Template.bind({});
HeaderStory.storyName = "Header";
