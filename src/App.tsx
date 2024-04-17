import { useState } from "react";
import styles from "./App.module.css";
import Frame1 from "./components/frame1.tsx";
import Frame2 from "./components/frame2.tsx";

function App() {
  const [frame, setFrame] = useState(0);
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "고영현",
      desc: "슈퍼프론트엔드 디벨로퍼",
    },
    {
      id: 2,
      name: "임찬솔",
      desc: "슈퍼슈퍼 프론트엔드 디벨로퍼... 내용은 한 줄로 제한합니다",
    },
    {
      id: 3,
      name: "정대용",
      desc: "슈슈퍼 백엔드 디벨로퍼",
    },
  ]);
  const [nextId, setNextId] = useState(4);

  const addMember = (newName: string, newDesc: string) => {
    setMembers([...members, { id: nextId, name: newName, desc: newDesc }]);
    setNextId(nextId + 1);
  };

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <img src="/class.png" alt="" />
        <div className={styles.text1}>
          UI/UX 단기간 속성 강의 (Figma, 6주차 단기 과정)
        </div>
        <div className={styles.text2}>
          카카오, 배달의 민족 등 10년차 현직 디자이너 강사와 함께하는 6주차
          과정의 UI/UX 단기간 속성 강의
        </div>
      </div>
      <div className={styles.notices}>
        <button className={styles.noti}>
          <img src="/alarm.png" alt="" />
          <div className={styles.textWrap}>
            <div className={styles.text1}>새 공지 작성하기</div>
            <div className={styles.text2}>
              클래스 모두에게 공지 알림을 보냅니다. 공지를 읽지 않은 사람에게
              알림을 다시 보낼 수 있습니다.
            </div>
          </div>
          <div className={styles.chevBox}>
            <img src="/chevron_right.png" alt="" />
          </div>
        </button>
        <button className={styles.noti}>
          <img src="/message.png" alt="" />
          <div className={styles.textWrap}>
            <div className={styles.text1}>1:1 메시지 한번에 보내기</div>
            <div className={styles.text2}>
              멤버들에게 일괄적으로 1:1 메시지를 보냅니다.
            </div>
          </div>
          <div className={styles.chevBox}>
            <img src="/chevron_right.png" alt="" />
          </div>
        </button>
      </div>
      <div className={styles.members}>
        <div className={styles.text}>클래스 멤버 (3)</div>
        {frame === 0 ? (
          <Frame1 toggleFrame={setFrame} />
        ) : (
          <Frame2 toggleFrame={setFrame} addMember={addMember} />
        )}
        <div className={styles.membersWrap}>
          {members.map((member) => (
            <div className={styles.memberBox} key={member.id}>
              <img
                src={
                  member.id <= 3
                    ? `/profile${member.id}.png`
                    : "/default_user.png"
                }
                alt=""
              />
              <div className={styles.profile}>
                <div className={styles.name}>{member.name}</div>
                <div className={styles.desc}>{member.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
