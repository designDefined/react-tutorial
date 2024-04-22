export async function AddUser({
  newName,
  newDesc,
}: {
  newName: string;
  newDesc: string;
}) {
  try {
    const response = await fetch("http://localhost:5174/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 요청의 Content-Type을 JSON으로 설정합니다.
      },
      body: JSON.stringify({ newName, newDesc }),
    });
    if (!response.ok) {
      throw new Error("서버에서 유저를 가져오는 데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("유저를 가져오는 중 오류가 발생했습니다:", error);
    throw error;
  }
}
