import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/g2E2NQ5SWSU",
  email: "12345@example.com",
  phone: "090-1111-1222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://www.yahoo.co.jp/"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>sssss</PrimaryButton>
      <SecondaryButton>sssss</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
