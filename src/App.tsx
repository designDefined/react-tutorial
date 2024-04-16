import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
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
          <div className={styles.text_wrap}>
            <div className={styles.text1}>새 공지 작성하기</div>
            <div className={styles.text2}>
              클래스 모두에게 공지 알림을 보냅니다. 공지를 읽지 않은 사람에게
              알림을 다시 보낼 수 있습니다.
            </div>
          </div>
          <div className={styles.chev_box}>
            <img src="/chevron_right.png" alt="" />
          </div>
        </button>
        <button className={styles.noti}>
          <img src="/message.png" alt="" />
          <div className={styles.text_wrap}>
            <div className={styles.text1}>1:1 메시지 한번에 보내기</div>
            <div className={styles.text2}>
              멤버들에게 일괄적으로 1:1 메시지를 보냅니다.
            </div>
          </div>
          <div className={styles.chev_box}>
            <img src="/chevron_right.png" alt="" />
          </div>
        </button>
      </div>
      <div className={styles.members}>
        <div className={styles.text}>클래스 멤버 (3)</div>
        <div className={styles.members_wrap}>
          <button className={styles.box}>
            <img src="/plus.png" alt="" />
            <div className={styles.text}>새로운 멤버 추가</div>
          </button>
          <div className={styles.member_box}>
            <img src="/profile1.png" alt="" />
            <div className={styles.profile}>
              <div className={styles.name}>고영현</div>
              <div className={styles.desc}>슈퍼프론트엔드 디벨로퍼</div>
            </div>
          </div>
          <div className={styles.member_box}>
            <img src="profile2.png" alt="" />
            <div className={styles.profile}>
              <div className={styles.name}>임찬솔</div>
              <div className={styles.desc}>
                슈퍼슈퍼 프론트엔드 디벨로퍼... 내용은 한 줄로 제한합니다
              </div>
            </div>
          </div>
          <div className={styles.member_box}>
            <img src="profile3.png" alt="" />
            <div className={styles.profile}>
              <div className={styles.name}>정대용</div>
              <div className={styles.desc}>슈슈퍼 백엔드 디벨로퍼</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
