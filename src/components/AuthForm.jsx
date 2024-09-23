//객체
// cosnt 객체 = {a:1} "" 안씀 = 도 안씀
// 뭐가 안되면 기능을 작동하는 페이지로 가서 console찍기
// console은 무조건 return 위에 쓰기
// 막히면 막히는대로 수시로 써야함

// 회원가입인지 로그인인지 구분하기 위해 mode 를 props 로 받습니다.
import { useState } from "react";

// onSubmit 도 회원가입과 로그인 페이지에서 각각 구현을 하고 props 로 넘겨줄 겁니다.
const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  console.log(formData);
  // id 입력을 위한 input 만 힌트로 만들어 두었습니다. 참고해서 한번 만들어봅시다!
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
      />

      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <button type="submit">{mode === "login" ? "로그인" : "회원가입"}</button>
    </form>
  );
};

export default AuthForm;
