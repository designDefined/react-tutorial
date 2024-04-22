export async function GetUsers() {
  try {
    const response = await fetch("http://localhost:5174/users");
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
