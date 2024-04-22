export async function DeleteUser(targetId: number) {
  try {
    const response = await fetch(`http://localhost:5174/users/${targetId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("서버에서 유저를 삭제하는 데 실패했습니다.");
    }
    console.log("유저를 성공적으로 삭제했습니다.");
  } catch (error) {
    console.error("유저를 삭제하는 중 오류가 발생했습니다:", error);
  }
}
