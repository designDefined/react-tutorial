import { useState } from "react";

/*
 * 컴포넌트 외부
 */

type Props = {
  description: string;
};

/*

  primitive type

  number
  boolean
  string

  reference type

  object
  array(사실 object)
  function(사실 object)
  symbol

*/

export default function Parent({ description }: Props) {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  /*
   * 컴포넌트 내부
   */

  return (
    /*
     * 컴포넌트의 반환
     */
    <div>
      parent 입니다 value: {value} {value2} {description}
      <button onClick={() => setValue(value + 1)}>추가</button>
      <button onClick={() => setValue2(value2 + 1)}>추가2</button>
    </div>
  );
}
