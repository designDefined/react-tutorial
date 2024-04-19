import { useState } from "react";
import styles from "./styles/frame2.module.css";

export default function RegisterButton({
  toggleFrame,
  addMember,
}: {
  toggleFrame: (x: 0 | 1) => void;
  addMember: (name: string, desc: string) => void;
}) {
  const [user, setUser] = useState({ name: "", desc: "" });
  const [inputState, setInputState] = useState<0 | 1 | 2>(0);

  const save = () => {
    addMember(user.name, user.desc);
    toggleFrame(0);
  };

  const closePopUp = () => {
    setInputState(0);
  };

  const emptyName = () => {
    setInputState(1);
  };

  const emptyDesc = () => {
    setInputState(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="이름을 입력하세요"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="설명을 입력하세요"
          value={user.desc}
          onChange={(e) => setUser({ ...user, desc: e.target.value })}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.saveButton}
          onClick={
            user.name === "" ? emptyName : user.desc === "" ? emptyDesc : save
          }
        >
          저장
        </button>
      </div>
      {inputState === 1 && (
        <div className={styles.popUp}>
          <div className={styles.caution}>이름은 필수 입력 사항입니다.</div>
          <button className={styles.closeButton} onClick={closePopUp}>
            닫기
          </button>
        </div>
      )}
      {inputState === 2 && (
        <div className={styles.popUp}>
          <div className={styles.contents}>설명은 필수 입력 사항입니다.</div>
          <button onClick={closePopUp}>닫기</button>
        </div>
      )}
    </div>
  );
}
