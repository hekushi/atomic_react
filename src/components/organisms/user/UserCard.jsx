import styled from "styled-components";
export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img height={160} width={160} src={user.image} alt="プロフィール" />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>1111@aaa.com</dd>
        <dt>TEL</dt>
        <dd>000-1111-2222</dd>
        <dt>会社名</dt>
        <dd>あいうえお株式会社</dd>
        <dt>WEB</dt>
        <dd>htttttt.inc</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
