import { useState } from "react";
import styles from "./styles/frame2.module.css";

export default function Frame2({
  toggleFrame,
  addMember,
}: {
  toggleFrame: (x: number) => void;
  addMember: (name: string, desc: string) => void;
}) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const save = () => {
    addMember(name, desc);
    toggleFrame(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="설명을 입력하세요"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.saveButton} onClick={() => save()}>
          저장
        </button>
      </div>
    </div>
  );
}
