import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({ nickname });
      setUser({ ...user, nickname: response.nickname });
      alert("닉네임 변경 완료됐습니다.");
    } catch (e) {
      alert("닉네임 변경 실패했습니다.");
    }
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label>닉네임</label>
            <input
              onChange={handleNicknameChange}
              className="ml-2 border border-[f000000] rounded-[8px]"
            />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
