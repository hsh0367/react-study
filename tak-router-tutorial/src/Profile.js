import React from "react";

// 프로필에서 사용 할 데이터
const profileData = {
  wontak: {
    name: '이원탁',
    description:
      '프론트엔드 공부를 하고 있는 그린웹 고인물'
  },
  sanghoon: {
    name: '허상훈',
    description: 'CAB 동료다.'
  }
};

const Profile = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;