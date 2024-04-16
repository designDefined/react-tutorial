import { useState } from "react";

/*
 * 컴포넌트 외부
 */
console.log("Parent outside");

type Props = {
  description: string;
};

export default function Parent({ description }: Props) {
  const [value, setValue] = useState(0);

  /*
   * 컴포넌트 내부
   */

  return (
    /*
     * 컴포넌트의 반환
     */
    <div>
      parent 입니다 value: {value} {description}
      <button onClick={() => setValue(value + 1)}>추가</button>
    </div>
  );
}
